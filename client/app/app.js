'use strict';

angular.module('illiatApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {
          url: '/',
          views: {
            "main" : {
              templateUrl: 'app/main/main.html',
              controller: 'MainController'
            }
          }
        })
    ;
  })
  .controller('AppController', function ($rootScope, $scope) {
    $rootScope.App = App;
    $scope.pageTitle = App.pageTitle.home;
    $scope.activeMenu = 'home';

    $scope.isActive = function(menu) {
      return $scope.activeMenu == menu;
    };
  });
