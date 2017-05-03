(function () {
    'use strict';

    angular.module('MIPM').controller('faqController', faqController);
    faqController.$inject = ['firebaseUrl', 'GobalService', '$firebaseArray', 'modal'];

    function faqController(firebaseUrl, GobalService, $firebaseArray, modal) {
        /* jshint validthis:true */
        var vm = this;
        var ref = new Firebase(firebaseUrl);
        vm.heading = "Frequently Asked Questions";
        vm.icon = "receipt";
        vm.FAQs = [];
        vm.pagenation = {
            limit: 5,
            page: 1,
        };

        init();
        function init() {
            vm.FAQs = $firebaseArray(ref.child('FAQ'));
        }

        vm.new = function () {
            GobalService.assignObject(undefined);
            var templateUrl = '/app/components/faq/addEditFAQ/addEditFAQ.html';
            modal.show(templateUrl, 'addEditFAQController').then(function () {
            });
        }

        vm.delete = function (row) {
            vm.FAQs.$remove(row);
        }
        vm.edit = function (row) {
            GobalService.assignObject(row);
            var templateUrl = '/app/components/faq/addEditFAQ/addEditFAQ.html';
            modal.show(templateUrl, 'addEditFAQController').then(function () {
            });
        }
    }
})();
