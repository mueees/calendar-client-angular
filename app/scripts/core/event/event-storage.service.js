(function () {
    'use strict';

    angular.module('clr.core.event').factory('EventStorage', function () {
        var eventForEdit = null;

        function storeEventForEdit(event){
            eventForEdit = event;
        }

        function getEventForEdit(){
            return eventForEdit;
        }

        return {
            storeEventForEdit: storeEventForEdit,
            getEventForEdit: getEventForEdit
        };
    });
})();