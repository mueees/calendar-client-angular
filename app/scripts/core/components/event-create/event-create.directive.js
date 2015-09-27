/**
 * @ngdoc directive
 * @name calendar.core.components.event-create.directive:mueEventCreate
 * @restrict E
 * @element mue-event-create
 *
 * @description
 * Test
 *
 */

angular.module('clr.core.components.event-create')
    .directive('clrEventCreate', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/event-create/event-create.directive.view.html',
            scope: {},
            link: function (scope, element) {

            }
        };
    });