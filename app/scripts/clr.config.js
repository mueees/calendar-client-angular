(function () {
    'use strict';
    angular.module('clr').config(function ($urlRouterProvider, mueAuthUserResourceProvider, mueAuthenticationProvider) {
        $urlRouterProvider.otherwise("app/main");

        mueAuthUserResourceProvider.setOauthKey('4eb3a945-5c16-2d88-1235-a5c7067a7873');
        mueAuthUserResourceProvider.config({
            origin: 'http://localhost:10002'
        });

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();