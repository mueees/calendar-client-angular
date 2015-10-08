(function () {
    'use strict';

    angular.module('clr.event').config(function ($stateProvider) {
        $stateProvider
            .state('app.event', {
                url: '/event',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('app.event.create', {
                url: '/create',
                isLoginRequired: true,
                templateUrl: 'app/scripts/pages/event/create-event.view.html',
                controller: 'CreateEventController',
                resolve: {
                    calendars: function (ClrCalendarResource) {
                        return ClrCalendarResource.all();
                    }
                }
            })
            .state('app.event.edit', {
                url: '/edit/{id}',
                isLoginRequired: true,
                templateUrl: 'app/scripts/pages/event/edit-event.view.html',
                controller: 'EditEventController',
                resolve: {
                    calendars: function (ClrCalendarResource) {
                        return ClrCalendarResource.all();
                    },
                    event: function (ClrEventResource, $stateParams) {
                        return ClrEventResource.get($stateParams.id);
                    }
                }
            });
    });
})();