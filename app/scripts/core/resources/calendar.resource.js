(function () {
    'use strict';
    angular.module('clr.core.resources').factory('ClrCalendarResource', function ($q, MueResource) {
        var calendars = MueResource.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.addElementTransformer('calendar/calendar', true, function (calendar) {
                // signature is (name, operation, path, params, headers, elementToPost)

                calendar.addRestangularMethod('create', 'post', 'create');
                calendar.addRestangularMethod('edit', 'post', 'edit');
                calendar.addRestangularMethod('all', 'get', 'all');
                return calendar;
            });
        }).all('calendar/calendar');

        return calendars;
    });
})();