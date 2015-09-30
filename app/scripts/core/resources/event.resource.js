(function () {
    'use strict';
    angular.module('clr.core.resources').factory('ClrEventResource', function ($q, MueResource) {
        var events = MueResource.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.addElementTransformer('calendar/event', true, function (events) {
                // signature is (name, operation, path, params, headers, elementToPost)

                events.addRestangularMethod('create', 'post', 'create');
                events.addRestangularMethod('find', 'post', 'find');
                return events;
            });
        }).all('calendar/event');

        return events;
    });
})();