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
      controller:'MainCtrl'
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
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('ContactCtrl', ['$scope','$http', function($scope, $http){
   $http.get('locations.json').then(function(response){
    $scope.locations = response.data;
  });
}]);
