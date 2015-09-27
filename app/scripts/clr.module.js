(function () {
    'use strict';

    angular.module('clr', [
        'clr.templates',
        'ui.router',

        /*pages*/
        'clr.main',
        'clr.event',
        'clr.login'
    ]);
})();