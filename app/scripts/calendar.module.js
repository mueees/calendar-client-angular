(function () {
    'use strict';

    angular.module('calendar', [
        'calendar.templates',
        'ui.router',

        /*pages*/
        'calendar.main',
        'calendar.event',
        'calendar.login'
    ]);
})();