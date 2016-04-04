angular.module('angularRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('*', {
            templateUrl: 'views/practice.html',
            controller: 'PracticeCtrl'
        })
        // TODO: Implement more stuff
        .when('/sessions', {
            templateUrl: 'views/practice.html',
            controller: 'PracticeCtrl'
        });

    $locationProvider.html5Mode(true);

}]);