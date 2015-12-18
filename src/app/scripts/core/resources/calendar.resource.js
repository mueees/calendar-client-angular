(function () {
    'use strict';
    angular.module('clr.core.resources').factory('ClrCalendarResource', function ($q, MueResource) {
        var Calendar = MueResource.withConfig(function (RestangularConfigurer) {

        });

        return {
            all: function () {
                return Calendar.all('calendar/calendars').getList();
            },
            create: function (data) {
                var calendar = Calendar.one('calendar/calendars');
                _.assign(calendar, data);

                return calendar.put();
            },
            edit: function (data) {
                var _id = data._id;

                delete data._id;

                return Calendar.all('calendar/calendars/' + _id).post(data);
            },
            deleteCalendar: function (id) {
                return Calendar.one('calendar/calendars/' + id).remove();
            }
        };
    });
})();