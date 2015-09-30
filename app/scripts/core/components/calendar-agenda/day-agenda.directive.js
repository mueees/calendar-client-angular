// day-agenda.directive

(function () {
    angular.module('clr.core.components.calendar-agenda').directive('clrDayAgenda', function () {
        return {
            restrict: 'E',
            scope: {
                clrConfig: '='
            },
            templateUrl: 'app/scripts/core/components/calendar-agenda/day-agenda.directive.view.html',
            link: function (scope) {
                scope.isToday = function () {
                    return moment(scope.clrConfig.day.date).format('Do dddd, MMMM YYYY') == moment(new Date()).format('Do dddd, MMMM YYYY');
                };

                scope.isWeekend = function (day) {
                    var momentDate = moment(scope.clrConfig.day.date);

                    return (momentDate.toDate().getDay() === 6) || (momentDate.toDate().getDay() === 0);
                };

                scope.eventCreateQuickConfig = {
                    date: scope.clrConfig.day.date,
                    create: function (event) {
                        scope.clrConfig.day.events.push(event);

                        scope.eventCreateQuickConfig.close();
                    },
                    close: function () {
                        scope.createNew = false;
                    }
                };
            }
        };
    });
})();