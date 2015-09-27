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

angular.module('mue.core.event-create')
    .directive('mueEventCreate', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/core/components/event-create/event-create.directive.html',
            scope: {},
            link: function (scope, element) {

            }
        };
    });