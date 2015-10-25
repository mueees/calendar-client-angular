(function () {
    'use strict';
    angular.module('clr').config(function ($urlRouterProvider, mueAuthUserResourceProvider, mueAuthenticationProvider) {
        $urlRouterProvider.otherwise("app/main");

        var environment = 'prod',
            origin = (environment == 'development') ? 'http://localhost:10002' : 'http://proxy.mue.in.ua',
            oauthKey = (environment == 'development') ? '4eb3a945-5c16-2d88-1235-a5c7067a7873' : '775e8458-587d-e1bb-6450-5b205b202303';

        mueAuthUserResourceProvider.setOauthKey(oauthKey);
        mueAuthUserResourceProvider.config({
            origin: origin
        });

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();