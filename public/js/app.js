var app = angular.module('bzApp', []);

app.controller('bzCtrl', function($scope, $http) {

    // API CALL
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        $scope.posts = response.data;
    });


});



