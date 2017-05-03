(function () {
    'use strict';

    angular.module('MIPM').controller('addEditFAQController', addEditFAQController);
    addEditFAQController.$inject = ['firebaseUrl', '$scope', '$firebaseArray', 'modal', '$firebaseObject', 'GobalService'];

    function addEditFAQController(firebaseUrl, $scope, $firebaseArray, modal, $firebaseObject, GobalService) {
        /* jshint validthis:true */
        var vm = this;
        var ref = new Firebase(firebaseUrl + "/FAQ");
        $scope.isEdit = false;

        init();
        function init() {
            $scope.faq = GobalService.getObject();
            if ($scope.faq)
                $scope.isEdit = true;
        }

        $scope.closeModal = function () {
            modal.hide();
        };

        $scope.create = function (faq) {

            $scope.formSubmitted = true;

            if ($scope.faqForm.$valid) {
                var faqs = $firebaseArray(ref);

                var newRecord = {
                    Question: faq.Question,
                    Answer: faq.Answer,
                };
                faqs.$add(newRecord);
                modal.hide();
            }

        }

        $scope.Update = function (faq) {
            $scope.formSubmitted = true;

            if ($scope.faqForm.$valid) {
                var editRef = new Firebase(firebaseUrl + "/FAQ/" + faq.$id);
                var oldFAQ = $firebaseObject(editRef);

                oldFAQ.$id = faq.$id;
                oldFAQ.Question = faq.Question;
                oldFAQ.Answer = faq.Answer;

                oldFAQ.$save();
                modal.hide();
            }
        }
        
    }
})();
