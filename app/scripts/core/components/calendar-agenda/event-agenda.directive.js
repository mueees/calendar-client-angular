// day-agenda.directive

(function () {
    angular.module('clr.core.components.calendar-agenda').directive('clrEventAgenda', function ($state, $modal) {
        return {
            restrict: 'E',
            scope: {
                clrConfig: '='
            },
            templateUrl: 'app/scripts/core/components/calendar-agenda/event-agenda.directive.view.html',
            link: function (scope) {
                scope.remove = function () {

                };

                scope.edit = function () {
                    $state.go('app.event.edit', {
                        id: scope.clrConfig.event.rawId || scope.clrConfig.event._id
                    });
                };
            }
        };
    });
})();