(function () {
    'use strict';

    angular.module('MIPM').controller('userController', userController);
    userController.$inject = ['firebaseUrl', '$firebaseArray'];

    function userController(firebaseUrl, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        var ref = new Firebase(firebaseUrl);
        vm.heading = "User";
        vm.icon = "group";
        vm.users = [];
        vm.pagenation = {
            limit: 5,
            page: 1,
        };

        init();
        function init() {
            vm.users = $firebaseArray(ref.child('User'));
        }

        //vm.view() = function(user){
        //    GobalService.assignObject(user);
        //    var templateUrl = '/app/components/user/userDetail/userDetail.html';
        //    modal.show(templateUrl, 'userDetailController').then(function () {
        //    });
        //}
    }
})();
