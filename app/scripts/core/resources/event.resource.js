(function () {
    'use strict';
    angular.module('clr.core.resources').factory('ClrEventResource', function ($q, MueResource) {
        var events = MueResource.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.addElementTransformer('calendar/event', true, function (events) {
                // signature is (name, operation, path, params, headers, elementToPost)

                events.addRestangularMethod('create', 'post', 'create');
                /*calendar.addRestangularMethod('edit', 'post', 'edit');
                calendar.addRestangularMethod('all', 'get', 'all');*/
                return events;
            });
        }).all('calendar/event');

        return events;
    });
})();