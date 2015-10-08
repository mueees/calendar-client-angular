(function () {
    'use strict';
    angular.module('clr').config(function ($urlRouterProvider, mueAuthUserResourceProvider, mueAuthenticationProvider) {
        $urlRouterProvider.otherwise("app/main");

        mueAuthUserResourceProvider.setOauthKey('775e8458-587d-e1bb-6450-5b205b202303');
        mueAuthUserResourceProvider.config({
            origin: 'http://proxy.mue.in.ua'
        });

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();