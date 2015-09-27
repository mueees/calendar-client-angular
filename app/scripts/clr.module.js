(function () {
    'use strict';

    angular.module('clr', [
        'clr.templates',
        'ui.router',
        'ui.bootstrap',

        'mue.core.error-handler',

        /*pages*/
        'clr.main',
        'clr.event',
        'clr.login'
    ]);
})();