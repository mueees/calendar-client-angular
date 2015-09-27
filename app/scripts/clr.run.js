(function () {
    'use strict';
    angular.module('clr').run(function ($rootScope, $state, mueToken, mueSession, MUE_AUTH_EVENTS, mueAuthentication) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.isLoginRequired !== false) {
                if (mueToken.hasToken()) {
                    if (!mueSession.isAlive()) {
                        event.preventDefault();

                        mueAuthentication.initSession().then(function () {
                            $state.go(toState, toParams);
                        });
                    }
                } else {
                    event.preventDefault();

                    $rootScope.$broadcast(MUE_AUTH_EVENTS.notAuthenticated);
                }
            }
        });
    });
})();