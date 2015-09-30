/**
 * @ngdoc directive
 * @name mue.core.calendar-create.directive:mueCalendarCreate
 * @restrict E
 * @element mue-calendar-create
 *
 * @description
 * Test
 *
 */

angular.module('clr.core.components.calendar-create')
    .directive('clrCalendarCreate', function (ClrCalendarResource) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/calendar-create/calendar-create.directive.view.html',
            scope: {
                clrConfig: '='
            },
            link: function (scope, element) {
                scope.calendar = {
                    name: ''
                };

                scope.close = scope.clrConfig.close;

                scope.create = function () {
                    ClrCalendarResource.create(scope.calendar).then(function (data) {
                        scope.calendar._id = data._id;
                        scope.clrConfig.create(scope.calendar);
                    }, function () {
                        scope.close();
                    });
                };

                scope.isDisabled = function () {
                    return !scope.calendar.name;
                };
            }
        };
    });