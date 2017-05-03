(function () {
    'use strict';
    var routeProvider = function ($routeProvider, $locationProvider) {

        var viewBase = '/app/components';
        var viewcommonBase = '/app/common';

        $routeProvider.when('/index', {
            controller: 'IndexController',
            templateUrl: 'index.html',
            controllerAs: 'vm'
        }).when('/login', {
            controller: 'LoginController',
            templateUrl: viewcommonBase + '/login/login.html',
            controllerAs: 'vm'
        }).when('/dashboard', {
            controller: 'dashboardController',
            templateUrl: viewBase + '/dashboard/dashboard.html',
            controllerAs: 'vm'
        }).when('/analytics', {
            controller: 'analyticController',
            templateUrl: viewBase + '/analytic/analytic.html',
            controllerAs: 'vm'
        }).when('/myAdverts', {
            controller: 'advertController',
            templateUrl: viewBase + '/advert/advert.html',
            controllerAs: 'vm'
        }).when('/reports', {
            controller: 'reportController',
            templateUrl: viewBase + '/report/report.html',
            controllerAs: 'vm'
        }).when('/faqs', {
            controller: 'faqController',
            templateUrl: viewBase + '/faq/faq.html',
            controllerAs: 'vm'
        }).when('/competitorReports', {
            controller: 'competitorReportController',
            templateUrl: viewBase + '/competitorReport/competitorReport.html',
            controllerAs: 'vm'
        }).when('/users', {
            controller: 'userController',
            templateUrl: viewBase + '/user/user.html',
            controllerAs: 'vm'
        }).otherwise({ redirectTo: '/' });
    }

    angular.module('MIPM').config(['$routeProvider', '$locationProvider', routeProvider]);
    routeProvider.$inject = ['$routeProvider', '$locationProvider'];

})();