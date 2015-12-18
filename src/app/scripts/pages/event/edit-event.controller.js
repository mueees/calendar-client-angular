(function () {
    'use strict';
    angular.module('clr.event').controller('EditEventController', function ($scope, calendars, event) {
        event = event.plain();
        event.start = new Date(event.start);
        event.end = new Date(event.end);

        calendars = calendars.plain();

        $scope.eventEditConfig = {
            calendars: calendars,
            event: event
        };
    });
})();