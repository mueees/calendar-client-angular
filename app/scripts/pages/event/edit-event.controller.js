(function () {
    'use strict';
    angular.module('clr.event').controller('EditEventController', function ($scope, calendars, event) {
        $scope.eventEditConfig = {
            calendars: calendars,
            event: event
        };
    });
})();