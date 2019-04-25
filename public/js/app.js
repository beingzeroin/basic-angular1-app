var app = angular.module('bzApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/partials/home.html",
        controller: 'homeCtrl'
      })
    .when("/login", {
      templateUrl : "/partials/login.html",
      controller: 'loginCtrl'
    })
    .when("/register", {
      templateUrl : "/partials/register.html",
      controller: 'registerCtrl'
    })
    .when("/dashboard", {
      templateUrl : "/partials/dashboard.html",
      controller: 'dashboardCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('bzCtrl', function($scope, $http) {

    // API CALL
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        $scope.posts = response.data;
    });

});

app.controller('loginCtrl', function($scope, $http) {

});

app.controller('registerCtrl', function($scope, $http) {

});

app.controller('dashboardCtrl', function($scope, $http) {

});

app.controller('homeCtrl', function($scope, $http) {

});


