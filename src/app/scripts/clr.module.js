(function () {
    'use strict';

    angular.module('clr', [
        'ui.router',
        'ui.bootstrap',

        'mue.helpers',
        'mue.core.error-handler',

        /*pages*/
        'clr.main',
        'clr.event',
        'clr.login'
    ]);
})();