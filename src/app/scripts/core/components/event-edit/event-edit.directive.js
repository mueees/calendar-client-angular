angular.module('clr.core.components.event-edit')
    .directive('clrEventEdit', function ($state, ClrEventResource) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/event-edit/event-edit.directive.view.html',
            scope: {
                clrConfig: '='
            },
            link: function (scope) {
                scope.event = scope.clrConfig.event;

                scope.repeatType = [
                    {
                        value: 1,
                        name: 'Daily'
                    },
                    {
                        value: 2,
                        name: 'Weekly'
                    },
                    {
                        value: 3,
                        name: 'Monthly'
                    },
                    {
                        value: 4,
                        name: 'Yearly'
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

                scope.edit = function () {
                    if (isValid()) {
                        ClrEventResource.edit(scope.event).then(function () {
                            $state.go('app.main');
                        });
                    }
                };

                scope.isDisabled = function () {
                    return !isValid();
                };

                function isValid() {
                    if (!scope.event.calendarId || !scope.event.start) {
                        return false;
                    }

                    if (scope.event.repeatType == 2 && !scope.event.repeatDays.length) {
                        return false;
                    }

                    return true;
                }
            }
        };
    });