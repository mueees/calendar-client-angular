angular.module('clr.core.components.event-create-quick')
    .directive('clrEventCreateQuick', function (ClrEventResource, ClrCalendarResource, EventStorage, $state) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/event-create-quick/event-create-quick.directive.view.html',
            scope: {
                clrConfig: '='
            },
            link: function (scope, element) {
                var start = scope.clrConfig.date || new Date();
                start = moment(start).minutes(0).seconds(0).toDate();

                scope.event = {
                    title: '',
                    start:start,
                    end: moment(start).add(1, 'hours').toDate(),
                    calendarId: null,
                    isAllDay: true,
                    isRepeat: false
                };

                scope.calendars = [];

                ClrCalendarResource.all().then(function (calendars) {
                    scope.calendars = calendars.plain();
                    scope.event.calendarId = scope.calendars[0]._id;
                });

                scope.create = function () {
                    ClrEventResource.create(scope.event).then(function (data) {
                        scope.event._id = data._id;

                        scope.clrConfig.create({
                            event: scope.event,
                            calendar: _.find(scope.calendars, {
                                _id: scope.event.calendarId
                            })
                        });
                    });
                };

                scope.edit = function () {
                    EventStorage.storeEventForEdit(scope.event);

                    $state.go('app.event.create');
                };

                scope.isDisabled = function () {
                    return !isValid();
                };

                function isValid() {
                    return !scope.event.calendarId || scope.event.title;
                }

                scope.close = scope.clrConfig.close;

                element.find('input')[0].focus();
            }
        };
    });