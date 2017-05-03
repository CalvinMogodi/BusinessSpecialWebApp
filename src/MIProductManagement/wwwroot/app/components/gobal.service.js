(function () {
    'use strict';

    angular.module('MIPM').factory('GobalService', GobalService);
    GobalService.$inject = ['$http'];

    function GobalService($http) {

        var self = this;
        self.object;
        self.categories = [
    'Select Category'
    ,'Adventure Or Theme Park'
    ,'Art'
    ,'Bar, Club Or Pub'
    ,'Beauty And Spa' 
    ,'Cars'
    ,'Fashion'
    ,'Games'
    ,'Health'
    ,'Hotal Or Casino'
    ,'Investor Or Bank'
    ,'Mall Or Shopping Center'
    ,'Music And Radio'
    ,'Restaurant Or Gas Station'
    ,'Software And Technology'
    ,'Sport'   
    ,'Supermarket'
    ,'Travel'
    ,'Theater'
    , 'Wholesale And Hardware']

        self.getObject = function () {
            return self.object;
        }

        self.assignObject = function (newObject) {
            self.object = newObject;
        }

        self.getCategories = function () {
            return self.categories;
        }

        return self;
    }
})();