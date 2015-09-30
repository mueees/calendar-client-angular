angular.module('clr.core.components.event-create-quick')
    .directive('clrEventCreateQuick', function (ClrEventResource, ClrCalendarResource, $state) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/event-create-quick/event-create-quick.directive.view.html',
            scope: {
                clrConfig: '='
            },
            link: function (scope, element) {
                scope.event = {
                    title: '',
                    start: scope.clrConfig.date || new Date(),
                    end: scope.clrConfig.date || new Date(),
                    calendarId: '',
                    isAllDay: true,
                    isRepeat: false
                };

                scope.calendars = [];

                ClrCalendarResource.all().then(function (calendars) {
                    scope.calendars = calendars.plain();
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