var app = angular.module("bhApp",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/main',{
      templateUrl: 'main.html',
      controller:'MainCtrl'
    }).
    when('/about',{
      templateUrl: 'about.html',
      controller:'MainCtrl'
    }).
    when('/books',{
      templateUrl: 'books.html',
      controller:'MainCtrl'
    }).
    when('/estuary',{
      templateUrl: 'estuary.html',
      controller:'GalleriesCtrl'
    }).
    when('/maelifellsander',{
      templateUrl: 'maelifellsander.html',
      controller:'MainCtrl'
    }).
    when('/conceptionisland',{
      templateUrl: 'conceptionisland.html',
      controller:'MainCtrl'
    }).
    when('/landeyjarsander',{
      templateUrl: 'landeyjarsander.html',
      controller:'MainCtrl'
    }).
    when('/searleslake',{
      templateUrl: 'searleslake.html',
      controller:'MainCtrl'
    }).
    when('/dallol',{
      templateUrl: 'dallol.html',
      controller:'MainCtrl'
    }).
    otherwise({redirectTo:'/main'})
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('books.json').then(function(response){
    $scope.books = response.data;
  });
}])

.controller('GalleriesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('galleries.json').then(function(response){
    $scope.galleries = response.data;
  });
}])

.controller('ContactCtrl', ['$scope','$http', function($scope, $http){
   $http.get('locations.json').then(function(response){
    $scope.locations = response.data;
  });
}]);
