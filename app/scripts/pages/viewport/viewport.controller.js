(function () {
    'use strict';
    angular.module('clr.viewport').controller('ViewportController', function ($scope, mueSession) {
        $scope.headerConfig = {
            name: 'Caleeendar!',
            email: mueSession.getUser().email
        };
    });
})();