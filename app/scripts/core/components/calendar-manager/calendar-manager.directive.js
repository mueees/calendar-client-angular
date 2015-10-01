angular.module('clr.core.components.calendar-manager')
    .directive('clrCalendarManager', function (ClrCalendarResource, ConfirmModal) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/calendar-manager/calendar-manager.directive.view.html',
            scope: {
                clrConfig: '='
            },
            link: function (scope, element) {
                scope.title = 'My calendars';

                function deleteHandler(calendar) {
                    ConfirmModal.open({
                        text: 'Do you want to delete calendar ?',
                        accept: 'Delete',
                        decline: 'Cancel'
                    }).result.then(function () {
                            ClrCalendarResource.deleteCalendar({
                                _id: calendar._id
                            }).then(function () {
                                _.remove(scope.listConfig.items, {
                                    _id: calendar._id
                                });

                                _.remove(scope.clrConfig.calendars, {
                                    _id: calendar._id
                                });
                            });
                        });
                }

                function clickHandler(item) {
                    item.active = !item.active;

                    _.find(scope.clrConfig.calendars, {
                        _id: item._id
                    }).active = item.active;

                    ClrCalendarResource.edit({
                        _id: item._id,
                        active: item.active
                    });
                }

                var actions = [
                    {
                        handler: deleteHandler,
                        icon: 'trash'
                    }
                ];

                scope.listConfig = {
                    ui: {
                        flat: true,
                        dark: true
                    },
                    clickHandler: clickHandler,
                    items: []
                };

                scope.$watch('clrConfig.calendars', function () {
                    scope.listConfig.items = [];

                    _.each(scope.clrConfig.calendars, function (calendar) {
                        scope.listConfig.items.push({
                            _id: calendar._id,
                            actions: actions,
                            icon: 'desktop',
                            text: calendar.name,
                            active: calendar.active
                        });
                    });
                }, true);

                scope.add = function () {
                    ClrCalendarResource.create({
                        name: 'Test name',
                        description: 'Test description'
                    }).then(function () {
                        scope.listConfig.items.push({
                            actions: actions,
                            icon: 'desktop',
                            text: 'Test name',
                            active: false
                        });
                    });
                };

                scope.selectAll = function () {
                    _.each(scope.listConfig.items, function (item) {
                        item.active = true;
                    });

                    _.each(scope.clrConfig.calendars, function (calendar) {
                        calendar.active = true;
                    });
                };

                scope.deselectAll = function () {
                    _.each(scope.listConfig.items, function (item) {
                        item.active = false;
                    });

                    _.each(scope.clrConfig.calendars, function (calendar) {
                        calendar.active = false;
                    });
                };

                scope.createCalendarConfig = {
                    create: function (calendar) {
                        scope.clrConfig.calendars.push(calendar);
                        scope.createCalendarConfig.close();
                    },
                    close: function () {
                        scope.createNew = false;
                    }
                };
            }
        };
    });