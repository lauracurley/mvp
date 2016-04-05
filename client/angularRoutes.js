angular.module('angularRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('*', {
            templateUrl: 'views/practice.html',
            controller: 'PracticeController'
        })
        // TODO: Implement more stuff
        .when('/sessions', {
            templateUrl: 'views/practice.html',
            controller: 'PracticeController'
        });

    $locationProvider.html5Mode(true);

}]);