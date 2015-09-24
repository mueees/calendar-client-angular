(function () {
    'use strict';
    angular.module('calendar').config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/main/promo");
    });
})();