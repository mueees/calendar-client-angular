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

angular.module('clr.core.calendar-create')
    .directive('mueCalendarCreate', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/calendar-create/calendar-create.directive.html',
            scope: {},
            link: function (scope, element) {

            }
        };
    });