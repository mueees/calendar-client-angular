(function () {
    'use strict';
    angular.module('clr.core.resources').factory('ClrEventResource', function ($q, MueResource) {
        var events = MueResource.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.addElementTransformer('calendar/event', true, function (events) {
                // signature is (name, operation, path, params, headers, elementToPost)

                events.addRestangularMethod('create', 'post', 'create');
                events.addRestangularMethod('find', 'post', 'find');
                events.addRestangularMethod('edit', 'post', 'edit');
                events.addRestangularMethod('deleteEvent', 'post', 'delete');

                return events;
            });
        }).all('calendar/event');

        // http://proxy.mue.in.ua/api/calendar/event/get/55d31c8abd59338538e9d472

        return events;
    });
})();