(function () {
    'use strict';

    function dashboardController($location, $sessionStorage) {
        /* jshint validthis:true */
        var vm = this;
        vm.heading = 'Dashboard';
        vm.icon = "home";
        vm.userType = $sessionStorage.user.UserTypeId;
      
        vm.navigateTo = function (url) {
            $location.path(url);
        }
    }

    angular.module('MIPM').controller('dashboardController', dashboardController);
    dashboardController.$inject = ['$location', '$sessionStorage'];

})();
