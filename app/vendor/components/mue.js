(function () {
    angular.module('mue.template', []);
})();

angular.module('mue.template').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/core/components/date-switcher/date-switcher.directive.html',
    "<button class=\"btn btn-lagoon mue-date-switcher-today\" ng-click=\"today()\" ng-disabled=\"isDisabled()\">Today</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"btn-group mue-date-switcher-navigation\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-lagoon\" ng-click=\"prev()\"><</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-lagoon\" ng-click=\"next()\">></button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<mue-date-viewer mue-config=\"dateViewerConfiguration\"></mue-date-viewer>"
  );


  $templateCache.put('src/core/components/date-viewer/date-viewer.directive.html',
    "<div ng-switch=\"mueConfig.type\">\r" +
    "\n" +
    "    <span ng-switch-when=\"1\">\r" +
    "\n" +
    "        {{mueConfig.start | date:'dd MMMM yyyy'}}\r" +
    "\n" +
    "    </span>\r" +
    "\n" +
    "    <span ng-switch-when=\"2\">\r" +
    "\n" +
    "        {{mueConfig.start | date:'dd MMMM'}} - {{mueConfig.end | date:'dd MMMM'}}, {{mueConfig.end | date:'yyyy'}}\r" +
    "\n" +
    "    </span>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/core/components/seed/seed.directive.html',
    "Seed directive"
  );

}]);

(function(){
    angular.module('mue.date-switcher', [
        'mue.template',
        'mue.date-viewer'
    ]);
})();
(function(){
    angular.module('mue.date-viewer', [
        'mue.template'
    ]);
})();
(function(){
    angular.module('mue.seed', [
        'mue.template'
    ]);
})();
(function () {
    'use strict';
    angular.module('mue.security', []);
})();
/**
 * @ngdoc directive
 * @name mue.date-switcher.directive:mueDateSwitcher
 * @restrict E
 * @element mue-date-switcher
 *
 * @description
 * Test
 *
 *
 <example module="test">

 <file name="index.html">
 <div ng-controller="Test">
 <mue-date-switcher mue-config="config"></mue-date-switcher>
 </div>
 </file>

 <file name="script.js">
 angular.module('test', ['mue.date-switcher']).controller('Test', function($scope){
     $scope.config = {
            type: 2,
            start: new Date(),
            end: moment(new Date()).add(5, 'd').toDate()
        };
 });
 </file>

 </example>
 */

angular.module('mue.date-switcher')
    .directive('mueDateSwitcher', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/date-switcher/date-switcher.directive.html',
            scope: {
                mueConfig: '='
            },
            link: function (scope, element) {
                scope.today = function () {
                    switch (scope.mueConfig.type) {
                        case 1:
                            scope.mueConfig.start = new Date();
                            break;
                        case 2:
                            var period = _getPeriod();
                            scope.mueConfig.start = new Date();
                            scope.mueConfig.end = moment(new Date()).add(period, 'd').toDate();
                            break;
                    }
                };

                function _getPeriod() {
                    return Math.floor((scope.mueConfig.end - scope.mueConfig.start) / (1000 * 60 * 60 * 24));
                }

                scope.prev = function () {
                    var period = _getPeriod();

                    switch (scope.mueConfig.type) {
                        case 1:
                            scope.mueConfig.start = moment(scope.mueConfig.start).add(-1, 'd').toDate();
                            break;
                        case 2:
                            scope.mueConfig.start = moment(scope.mueConfig.start).add(-period, 'd').toDate();
                            scope.mueConfig.end = moment(scope.mueConfig.end).add(-period, 'd').toDate();
                            break;
                    }
                };

                scope.next = function () {
                    var period = _getPeriod();

                    switch (scope.mueConfig.type) {
                        case 1:
                            scope.mueConfig.start = moment(scope.mueConfig.start).add(1, 'd').toDate();
                            break;
                        case 2:
                            scope.mueConfig.start = moment(scope.mueConfig.start).add(period, 'd').toDate();
                            scope.mueConfig.end = moment(scope.mueConfig.end).add(period, 'd').toDate();
                            break;
                    }
                };

                scope.isDisabled = function () {
                    var isDisabled = true,
                        startMoment = moment(scope.mueConfig.start);

                    switch (scope.mueConfig.type) {
                        case 1:
                            isDisabled = (startMoment.format('DD') == moment(new Date()).format('DD'));
                            break;
                        case 2:
                            isDisabled = (startMoment.format('DD') == moment(new Date()).format('DD'));
                            break;
                    }

                    return isDisabled;
                };

                scope.dateViewerConfiguration = scope.mueConfig;
            }
        }
    });
/**
 * @ngdoc directive
 * @name mue.date-viewer.directive:mueDateViewer
 * @restrict E
 * @element mue-date-viewer
 *
 * @description
 * Test
 *
 *
 <example module="test">

 <file name="index.html">
 <div ng-controller="Test">
 <mue-date-viewer mue-config="dateViewerConfiguration"></mue-date-viewer>
 </div>
 </file>

 <file name="script.js">
 angular.module('test', ['mue.date-viewer']).controller('Test', function($scope){
 $scope.dateViewerConfiguration = {
            type: 2,
            start: new Date(),
            end: new Date()
        }
 });
 </file>

 </example>
 */

angular.module('mue.date-viewer')
    .directive('mueDateViewer', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/date-viewer/date-viewer.directive.html',
            scope: {
                mueConfig: '='
            },
            link: function (scope, element) {

            }
        }
    });
/**
 * @ngdoc directive
 * @name mue.seed.directive:mueSeed
 * @restrict E
 * @element mue-seed
 *
 * @description
 * Test
 *
 *
 <example module="test">

 <file name="index.html">
 <div ng-controller="Test">
 <mue-seed></mue-seed>
 </div>
 </file>

 <file name="script.js">
 angular.module('test', ['mue.seed']).controller('Test', function($scope){});
 </file>

 </example>
 */

angular.module('mue.seed')
    .directive('mueSeed', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/core/components/seed/seed.directive.html'
        }
    });