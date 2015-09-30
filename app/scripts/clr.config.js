(function () {
    'use strict';
    angular.module('clr').config(function ($urlRouterProvider, mueAuthUserResourceProvider, mueAuthenticationProvider) {
        $urlRouterProvider.otherwise("app/main");

        // 6c4ad72e-e458-2825-ad05-ee56c2b1f376 // work
        // a4afec2d-1e96-4eff-8201-5b1f518f4c14 // home
        mueAuthUserResourceProvider.setOauthKey('6c4ad72e-e458-2825-ad05-ee56c2b1f376');
        mueAuthUserResourceProvider.config({
            origin: 'http://localhost:10002'
        });

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();