(function () {
    'use strict';

    angular.module('MIPM').controller('addEditAdvertController', addEditAdvertController);
    addEditAdvertController.$inject = ['firebaseUrl', '$scope', '$firebaseArray', 'modal', '$firebaseObject', 'GobalService', '$filter', '$sessionStorage'];

    function addEditAdvertController(firebaseUrl, $scope, $firebaseArray, modal, $firebaseObject, GobalService, $filter, $sessionStorage) {
        /* jshint validthis:true */
        var vm = this;
        var ref = new Firebase(firebaseUrl + "/Advert");
        $scope.isEdit = false;

        init();
        function init() {
            $scope.advert = GobalService.getObject();
            if ($scope.advert) {
                $scope.isEdit = true;
                $scope.advert.StartDate = new Date($scope.advert.StartDate);
                $scope.advert.EndDate = new Date($scope.advert.EndDate);
                $scope.advert.StartTime = new Date($scope.advert.StartTime).getHours() + ':' + new Date($scope.advert.StartTime).getMinutes();
                $scope.advert.EndTime = new Date($scope.advert.EndTime).getHours() + ':' + new Date($scope.advert.EndTime).getMinutes();
            }               

            $scope.categories = GobalService.getCategories();
        }

        $scope.closeModal = function () {
            modal.hide();
        };

        $scope.create = function (advert) {

            $scope.formSubmitted = true;

            if ($scope.advertForm.$valid) {                

                var adverts = $firebaseArray(ref);
                var startDate = $filter('date')(advert.EndDate, 'yyyy-MM-dd');
                var endDate = $filter('date')(advert.StartDate, 'yyyy-MM-dd');
                
                var startTime = new Date(advert.StartTime).getTime()
                var newRecord = {
                    Category:  advert.Category,
                    Email: advert.Email,
                    EndDate: endDate.toString(),
                    EndTime: new Date(advert.EndTime).getHours() + ':' + new Date(advert.EndTime).getMinutes(),
                    Location: advert.Location,
                    Phone: advert.Phone,
                    SpecialName: advert.SpecialName,
                    StartDate: startDate.toString(),
                    StartTime: new Date(advert.StartTime).getHours() + ':' + new Date(advert.StartTime).getMinutes(),
                    UserId: $sessionStorage.user.$id,
                };
                adverts.$add(newRecord);
                modal.hide();
            }

        }

        $scope.Update = function (advert) {
            $scope.formSubmitted = true;

            if ($scope.advertForm.$valid) {
                var editRef = new Firebase(firebaseUrl + "/Advert/" + advert.$id);
                var oldAdvert = $firebaseObject(editRef);

                var startDate = $filter('date')(advert.EndDate, 'yyyy-MM-dd');
                var endDate = $filter('date')(advert.StartDate, 'yyyy-MM-dd');

                oldAdvert.$id = advert.$id;
                oldAdvert.Category =  advert.Category,
                oldAdvert.Email = advert.Email,
                oldAdvert.EndDate = endDate.toString(),
                oldAdvert.EndTime = new Date(advert.EndTime).getHours() + ':' + new Date(advert.EndTime).getMinutes(),
                oldAdvert.Location = advert.Location,
                oldAdvert.Phone = advert.Phone,
                oldAdvert.SpecialName = advert.SpecialName,
                oldAdvert.StartDate = startDate.toString(),
                oldAdvert.StartTime = new Date(advert.StartTime).getHours() + ':' + new Date(advert.StartTime).getMinutes(),
                oldAdvert.UserId = advert.UserId,

                oldAdvert.$save();
                modal.hide();
            }
        }
       
    }
})();
