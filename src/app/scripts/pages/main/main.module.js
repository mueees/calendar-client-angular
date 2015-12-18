(function () {
    'use strict';

    angular.module('clr.main', [
        'ui.router',
        'clr.core.resources',
        'clr.viewport',
        'clr.core.components.calendar-manager',
        'mue.core.components.date-switcher',
        'clr.core.components.calendar-agenda'
    ]);
})();