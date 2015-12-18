(function () {
    'use strict';
    angular.module('clr.main').controller('MainController', function ($scope, calendars) {
        $scope.calendarManagerConfig = {
            calendars: calendars.plain() || []
        };

        var start = new Date(),
            end = moment(new Date()).add(7, 'd').toDate();

        $scope.dateSwitcherConfig = {
            type: 2,
            start: start,
            end: end
        };

        $scope.$watch('calendarManagerConfig.calendars', function () {
            $scope.calendarAgendaConfig.calendars = _.filter($scope.calendarManagerConfig.calendars, {
                active: true
            });
        }, true);

        $scope.$watch('dateSwitcherConfig', function (newConfig) {
            $scope.calendarAgendaConfig.period.start = newConfig.start;
            $scope.calendarAgendaConfig.period.end = newConfig.end;
        }, true);

        $scope.calendarAgendaConfig = {
            calendars: [],
            period: {
                start: start,
                end: end
            }
        };
    });
})();