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
    .directive('clrCalendarCreate', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/calendar-create/calendar-create.directive.view.html',
            scope: {},
            link: function (scope, element) {

            }
        };
    });