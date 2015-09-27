(function () {
    'use strict';
    angular.module('clr.login').controller('LoginController', function ($scope) {
        $scope.loginConfig = {
            name: 'Calendar',
            description: 'Event and task manager',
            action: 'Login'
        };
    });
})();