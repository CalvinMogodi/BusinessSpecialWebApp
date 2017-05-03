(function () {
    'use strict';

    angular
        .module('app')
        .controller('userDetail', userDetail);

    userDetail.$inject = ['$location']; 

    function userDetail($location) {
        /* jshint validthis:true */
        var vm = this;
        $scope.normalUser = false;

        init();
        function init() {
            $scope.user = GobalService.getObject();
            if ($scope.user.UserType == 1 || $scope.user.UserType == 2)
                $scope.normalUser = true;
        }

        $scope.closeModal = function () {
            modal.hide();
        };
    }
})();
