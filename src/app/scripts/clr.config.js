(function () {
    'use strict';
    angular.module('clr').config(function (clrConfigProvider, MueResourceProvider, $urlRouterProvider, mueAuthProxyProvider, mueAuthenticationProvider) {
        $urlRouterProvider.otherwise("app/main");

        mueAuthProxyProvider.setOauthKey(clrConfigProvider.get('oauthKey'));

        mueAuthProxyProvider.config({
            origin: clrConfigProvider.get('origin')
        });

        MueResourceProvider.setBaseUrl(clrConfigProvider.get('origin') + '/api');

        mueAuthenticationProvider.loginState('login');
        mueAuthenticationProvider.appState('app.main');
    });
})();