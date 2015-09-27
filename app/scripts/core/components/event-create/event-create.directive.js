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
    .directive('clrEventCreate', function ($state, ClrEventResource) {
        return {
            restrict: 'E',
            templateUrl: 'app/scripts/core/components/event-create/event-create.directive.view.html',
            scope: {},
            link: function (scope, element) {
                scope.event = {
                    title: '',
                    description: '',
                    start: new Date()
                };

                scope.date = {
                    opened: false
                };

                scope.format = 'dd MMMM yyyy';
                scope.dateClickHandler = function () {
                    scope.date.opened = !scope.date.opened;
                };

                scope.create = function () {
                    if( isValid() ){
                        ClrEventResource.create(event).then(function () {
                            $state.go('app.main');
                        });
                    }
                };

                function isValid(){
                    return true;
                }
            }
        };
    });