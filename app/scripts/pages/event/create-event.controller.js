(function () {
    'use strict';
    angular.module('clr.event').controller('CreateEventController', function ($scope, calendars) {
        $scope.eventCreateConfig = {
            calendars: calendars
        };
    });
})();