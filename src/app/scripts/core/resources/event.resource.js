(function () {
    'use strict';
    angular.module('clr.core.resources').factory('ClrEventResource', function ($q, MueResource) {
        var Event = MueResource.withConfig(function (RestangularConfigurer) {

        });

        return {
            create: function (data) {
                var event = Event.one('calendar/events');
                _.assign(event, data);

                return event.put();
            },
            find: function (data) {
                return Event.all('calendar/events/find').post(data);
            },
            deleteEvent: function (id) {
                return Event.one('calendar/events/' + id).remove();
            },
            get: function (eventId) {
                return Event.one('calendar/events/' + eventId).get();
            },
            edit: function (data) {
                var _id = data._id;

                delete data._id;

                return Event.all('calendar/events/' + _id).post(data);
            }
        };
    });
})();