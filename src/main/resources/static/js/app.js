'use strict';
var sysconferApp = angular.module('sysconferApp', [ 'ngRoute','ngAnimate', 'ngMaterial', 'ui.bootstrap' ]);

sysconferApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/templates/pages/gerarCarnes/carneLote.html',
        controller: 'carneLoteController'
    })
    .when('/login', {
        templateUrl: '/templates/pages/login.html',
        controller: 'loginController'
    })
    .when('/carneLote', {
        templateUrl: '/templates/pages/gerarCarnes/carneLote.html',
        controller: 'carneLoteController'
    })

});

sysconferApp.config( function($mdThemingProvider){
	// Configure a dark theme with primary foreground yellow
	$mdThemingProvider.theme('docs-dark', 'default')
	    .primaryPalette('blue')
	    .dark();});

sysconferApp.controller('mainController', function($scope) {
$scope.pageClass = 'page-home';
});

sysconferApp.controller('loginController', function($scope) {
$scope.pageClass = 'page-about';
});

