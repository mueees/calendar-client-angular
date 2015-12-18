(function () {
    'use strict';

    angular.module('clr.viewport').config(function ($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'scripts/pages/viewport/viewport.view.html',
            controller: 'ViewportController',
            resolve: {
                user: function (mueAuthentication) {
                    return mueAuthentication.initSession();
                }
            }
        });
    });
})();