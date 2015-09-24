(function () {
    'use strict';

    angular.module('calendar.promo').config(function ($stateProvider) {
        $stateProvider
            .state('main.promo', {
                url: '/promo',
                templateUrl: 'app/scripts/pages/promo/promo.view.html',
                controller: 'PromoController'
            });
    });
})();