(function () {
    'use strict';
    angular.module('clr.main').controller('MainController', function ($scope, calendars) {
        $scope.calendarManagerConfig = {
            calendars: calendars.plain() || []
        };

        $scope.dateSwitcherConfig = {
            type: 2,
            start: new Date(),
            end: moment(new Date()).add(7, 'd').toDate()
        };

        $scope.$watch('calendarManagerConfig.calendars', function () {
            var activeCalendars = _.filter($scope.calendarManagerConfig.calendars, {
                active: true
            });

            console.log(activeCalendars);
        }, true);
    });
})();