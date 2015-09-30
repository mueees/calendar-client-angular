(function () {
    angular.module('clr.core.components.calendar-agenda').directive('clrCalendarAgenda', function (ClrEventResource) {
        return {
            restrict: 'E',
            scope: {
                clrConfig: '='
            },
            templateUrl: 'app/scripts/core/components/calendar-agenda/calendar-agenda.directive.view.html',
            link: function (scope) {

                scope.$watch('clrConfig', function () {
                    var calendars = getCalendarIds();

                    if(calendars.length){
                        ClrEventResource.find({
                            calendarIds: calendars,
                            start: scope.clrConfig.period.start,
                            end: scope.clrConfig.period.end
                        }).then(function (events) {
                            console.log(events.plain());
                        });
                    }
                }, true);

                function getCalendarIds(){
                    return _.map(scope.clrConfig.calendars, function (calendar) {
                        return calendar._id;
                    });
                }

                // http://proxy.mue.in.ua/api/calendar/event/find
                // calendarIds: ["55bc78c551b1bbd6199578f4"]
                // end: "2015-11-03T21:25:58.337Z"
                // start: "2015-10-27T21:25:58.337Z"
            }
        };
    });
})();