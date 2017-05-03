(function () {
    'use strict';

    function LoginController($location, $scope, $firebaseObject, $firebaseArray, $sessionStorage, $rootScope, LoginService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
        var ref = new Firebase("https://courierrequest-6a586.firebaseio.com");
        vm.login = {};
       
        $rootScope.profileImage = 'assets/img/placeholder.png';

        $scope.login = function (user) {
            vm.users = $firebaseArray(ref.child('User'));
            vm.users.$loaded(function (data) {
                for (var i = 0; i < data.length; i++) {
                    var _user = data[i];
                    if (_user.Username.toLowerCase() == user.username.toLowerCase() && _user.Password == user.password) {
                        if (_user.UserTypeId == 1) {
                            $sessionStorage.isUserAuthenticated = true;
                            $sessionStorage.displayName = 'Administrator';
                            $sessionStorage.user = _user;
                        }
                        else if (_user.UserTypeId == 3)
                        {                            
                            $sessionStorage.isUserAuthenticated = true;
                            $sessionStorage.displayName = _user.BusinessName;
                            $sessionStorage.user = _user;
                        }
                        $location.path('/dashboard');
                        break;
                    }
                }
            
            });
    }
        

    }

    angular.module('MIPM').controller('LoginController', LoginController);
    LoginController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', '$sessionStorage', '$rootScope', 'LoginService'];
})();
