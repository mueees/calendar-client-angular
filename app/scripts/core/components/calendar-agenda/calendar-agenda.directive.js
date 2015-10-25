(function () {
    angular.module('clr.core.components.calendar-agenda').directive('clrCalendarAgenda', function (ClrEventResource) {
        return {
            restrict: 'E',
            scope: {
                clrConfig: '='
            },
            templateUrl: 'app/scripts/core/components/calendar-agenda/calendar-agenda.directive.view.html',
            link: function (scope) {
                scope.days = [];

                scope.$watch('clrConfig', function () {
                    var calendars = _.map(scope.clrConfig.calendars, function (calendar) {
                        return calendar._id;
                    });

                    if (calendars.length) {
                        ClrEventResource.find({
                            calendarIds: calendars,
                            start: scope.clrConfig.period.start,
                            end: scope.clrConfig.period.end
                        }).then(function (events) {
                            // todo: this's hack! Sometimes event = undefined
                            if (events && events.plain) {
                                buildAgenda(events.plain());
                            } else {
                                buildAgenda([]);
                            }
                        });
                    } else {
                        buildAgenda([]);
                    }
                }, true);

                function buildAgenda(events) {
                    scope.days = generateDays(scope.clrConfig.period.start, scope.clrConfig.period.end);
                    populateEvents(events);
                }

                function generateDays(startDate, endDate) {
                    var result = [],
                        start = new Date(startDate),
                        end = new Date(endDate);

                    while (start <= end) {
                        result.push({
                            date: new Date(start.getTime()),
                            events: []
                        });

                        start.setDate(start.getDate() + 1);
                    }

                    return result;
                }

                function populateEvents(events) {
                    var format = 'MMMM Do YYYY';

                    _.each(scope.days, function (day) {
                        var eventsForCurrentDay = _.filter(events, function (event) {
                            return moment(day.date).format(format) == moment(event.start).format(format);
                        });

                        _.each(eventsForCurrentDay, function (event) {
                            day.events.push({
                                event: event,
                                calendar: _.find(scope.clrConfig.calendars, {
                                    _id: event.calendarId
                                })
                            });
                        });
                    });
                }
            }
        };
    });
})();