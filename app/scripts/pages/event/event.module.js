(function () {
    'use strict';

    angular.module('clr.event', [
        'ui.router',
        'clr.viewport',
        'clr.core.components.event-create',
        'clr.core.components.event-edit',
        'clr.core.event'
    ]);
})();