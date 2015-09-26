(function () {
    'use strict';

    angular.module('calendar.login').config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/scripts/pages/login/login.view.html',
                controller: 'LoginController'
            });
    });
})();