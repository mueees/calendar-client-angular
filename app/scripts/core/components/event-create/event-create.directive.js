/**
 * @ngdoc directive
 * @name calendar.core.components.event-create.directive:mueEventCreate
 * @restrict E
 * @element mue-event-create
 *
 * @description
 * Test
 */

angular.module('clr.core.components.event-create')
    .directive('clrEventCreate', function ($state, ClrEventResource) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/event-create/event-create.directive.view.html',
            scope: {
                clrConfig: '='
            },
            link: function (scope, element) {
                var start = moment(new Date()).minutes(0).seconds(0).toDate();

                scope.event = {
                    title: '',
                    description: '',
                    start: start,
                    end: moment(start).add(1, 'hours').toDate(),
                    calendarId: '',
                    isAllDay: false,
                    isRepeat: false,
                    repeatType: 1,
                    repeatEnd: moment(start).add(1, 'days').toDate(),
                    repeatDays: []
                };

                scope.repeatEnd = false;

                scope.repeatType = [
                    {
                        value: 1,
                        name: 'Daily'
                    },
                    {
                        value: 2,
                        name: 'Weekly'
                    }
                ];

                scope.days = [
                    {
                        value: 0,
                        name: 'Sunday'
                    },
                    {
                        value: 1,
                        name: 'Monday'
                    }
                ];

                scope.toggleDaysSelection = function (value) {
                    var idx = scope.event.repeatDays.indexOf(value);

                    // is currently selected
                    if (idx > -1) {
                        scope.event.repeatDays.splice(idx, 1);
                    }

                    // is newly selected
                    else {
                        scope.event.repeatDays.push(value);
                    }
                };

                scope.datePicker = {
                    opened: false,
                    format: 'dd MMMM yyyy'
                };

                scope.endDatePicker = {
                    opened: false,
                    format: 'dd MMMM yyyy'
                };

                scope.startTimepicker = {
                    hstep: 1,
                    mstep: 30,
                    ismeridian: true
                };

                scope.endTimepicker = {
                    hstep: 1,
                    mstep: 30,
                    ismeridian: true
                };

                scope.dateClickHandler = function () {
                    scope.datePicker.opened = !scope.datePicker.opened;
                };

                scope.dateEndClickHandler = function () {
                    scope.endDatePicker.opened = !scope.endDatePicker.opened;
                };

                scope.create = function () {
                    if (isValid()) {
                        ClrEventResource.create(scope.event).then(function () {
                            $state.go('app.main');
                        });
                    }
                };

                function isValid() {
                    return true;
                }
            }
        };
    });