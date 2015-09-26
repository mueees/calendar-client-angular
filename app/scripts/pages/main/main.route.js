(function () {
    'use strict';

    angular.module('calendar.main').config(function ($stateProvider) {
        $stateProvider
            .state('app.main', {
                url: '/main',
                isLoginRequired: true,
                templateUrl: 'app/scripts/pages/main/main.view.html',
                controller: 'MainController'
            });
    });
})();