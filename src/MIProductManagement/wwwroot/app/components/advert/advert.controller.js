(function () {
    'use strict';

    angular.module('MIPM').controller('advertController', advertController);
    advertController.$inject = ['firebaseUrl', '$firebaseArray', '$sessionStorage', 'GobalService', 'modal'];

    function advertController(firebaseUrl, $firebaseArray, $sessionStorage, GobalService, modal) {
        /* jshint validthis:true */
        var vm = this;
        var ref = new Firebase(firebaseUrl);
        vm.heading = "My Adverts";
        vm.icon = "add_box";
        vm.adverts = [];
        vm.pagenation = {
            limit: 5,
            page: 1,
        };

        init();
        function init() {
            vm.array = $firebaseArray(ref.child('Advert'));
            vm.array.$loaded(function (data) {
                for (var i = 0; i < data.length; i++) {
                    var advert = data[i];
                    if (advert.UserId == $sessionStorage.user.$id) {
                        vm.adverts.push(advert);
                    }
                }
            });
        }

        vm.new = function () {
            GobalService.assignObject(undefined);
            var templateUrl = '/app/components/advert/addEditAdvert/addEditAdvert.html';
            modal.show(templateUrl, 'addEditAdvertController').then(function () {
            });
        }

        vm.delete = function (row, index) {
            vm.array.$remove(row);
            vm.adverts.splice(index, 1);
        }
        vm.edit = function (row) {
            GobalService.assignObject(row);
            var templateUrl = '/app/components/advert/addEditAdvert/addEditAdvert.html';
            modal.show(templateUrl, 'addEditAdvertController').then(function () {
            });
        }
    }
})();
