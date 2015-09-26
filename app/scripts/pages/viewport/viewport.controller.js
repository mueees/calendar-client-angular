(function () {
    'use strict';
    angular.module('calendar.viewport').controller('ViewportController', function ($scope, mueSession) {
        $scope.headerConfig = {
            name: 'Caleeendar!',
            email: mueSession.getUser().email
        };
    });
})();