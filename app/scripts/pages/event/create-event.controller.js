(function () {
    'use strict';
    angular.module('clr.event').controller('CreateEventController', function ($scope, calendars, EventStorage) {
        $scope.eventCreateConfig = {
            calendars: calendars,
            event: EventStorage.getEventForEdit() || {}
        };
    });
})();