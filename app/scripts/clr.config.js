(function () {
    'use strict';
    angular.module('clr').config(function ($urlRouterProvider, mueAuthUserResourceProvider, mueAuthenticationProvider) {
        $urlRouterProvider.otherwise("app/main");

        mueAuthUserResourceProvider.setOauthKey('a4afec2d-1e96-4eff-8201-5b1f518f4c14');
        mueAuthUserResourceProvider.config({
            origin: 'http://localhost:10002'
        });

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();