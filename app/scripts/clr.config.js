(function () {
    'use strict';
    angular.module('clr').config(function (clrConfigProvider, MueResourceProvider, $urlRouterProvider, mueAuthUserResourceProvider, mueAuthenticationProvider) {
        $urlRouterProvider.otherwise("app/main");

        mueAuthUserResourceProvider.setOauthKey(clrConfigProvider.get('oauthKey'));

        mueAuthUserResourceProvider.config({
            origin: clrConfigProvider.get('origin')
        });

        MueResourceProvider.setBaseUrl(clrConfigProvider.get('origin') + '/api');

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();