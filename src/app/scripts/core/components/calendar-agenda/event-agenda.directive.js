// day-agenda.directive

(function () {
    angular.module('clr.core.components.calendar-agenda').directive('clrEventAgenda', function ($state, $modal, ConfirmModal, ClrEventResource) {
        return {
            restrict: 'E',
            scope: {
                clrConfig: '='
            },
            templateUrl: 'scripts/core/components/calendar-agenda/event-agenda.directive.view.html',
            link: function (scope) {
                var eventId = scope.clrConfig.eventData.event.rawId || scope.clrConfig.eventData.event._id;

                scope.remove = function () {
                    ConfirmModal.open({
                        text: 'Do you want to delete "' + scope.clrConfig.eventData.event.title + '" event ?',
                        accept: 'Delete',
                        decline: 'Cancel'
                    }).result.then(function () {
                            ClrEventResource.deleteEvent(eventId).then(function () {
                                scope.clrConfig.api.deleteEvent(eventId);
                            });
                        });
                };

                scope.edit = function () {
                    $state.go('app.event.edit', {
                        id: eventId
                    });
                };
            }
        };
    });
})();