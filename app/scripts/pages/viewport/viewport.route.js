(function () {
    'use strict';

    angular.module('clr.viewport').config(function ($stateProvider, mueAuthentication) {
        $stateProvider.state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'app/scripts/pages/viewport/viewport.view.html',
            controller: 'ViewportController',
            resolve: {
                user: mueAuthentication.initSession
            }
        });
    });
})();