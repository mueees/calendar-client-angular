// day-agenda.directive

(function () {
    angular.module('clr.core.components.calendar-agenda').directive('clrDayAgenda', function ($rootScope, CLR_CALENDAR_AGENDA) {
        return {
            restrict: 'E',
            scope: {
                clrConfig: '='
            },
            templateUrl: 'app/scripts/core/components/calendar-agenda/day-agenda.directive.view.html',
            link: function (scope) {
                scope.isToday = function () {
                    return moment(scope.clrConfig.day.date).format('Do dddd, MMMM YYYY') == moment(new Date()).format('Do dddd, MMMM YYYY');
                };

                scope.isWeekend = function (day) {
                    var momentDate = moment(scope.clrConfig.day.date);

                    return (momentDate.toDate().getDay() === 6) || (momentDate.toDate().getDay() === 0);
                };

                scope.eventConfig = {
                    deleteEvent: function (id) {
                        _.remove(scope.clrConfig.day.events, function (eventData) {
                            return eventData.event._id == id || eventData.event.rawId == id;
                        });

                        $rootScope.$broadcast(CLR_CALENDAR_AGENDA.events.deleteEvent, id);
                    }
                };

                scope.$on(CLR_CALENDAR_AGENDA.events.deleteEvent, function (event, id) {
                    _.remove(scope.clrConfig.day.events, function (eventData) {
                        return eventData.event._id == id || eventData.event.rawId == id;
                    });
                });

                scope.eventCreateQuickConfig = {
                    date: scope.clrConfig.day.date,
                    create: function (data) {
                        scope.clrConfig.day.events.push(data);

                        scope.eventCreateQuickConfig.close();
                    },
                    close: function () {
                        scope.createNew = false;
                    }
                };
            }
        };
    });
})();