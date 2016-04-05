angular.module('PracticeCtrl', [])

  .controller('PracticeController', function($scope, $location, Practice) {

    $scope.test = 'Enter how long you meditated rate the session:';   
    $scope.practice = {};
    $scope.data = {};

    $scope.create = function () {
      console.log('scope practice on submit', $scope.practice);
      Practice.create($scope.practice)
        .then(function () {
          $location.path('/');
        })
        .catch(function (error) {
          console.log('Error in creating a session: ', error);
        });
    };

    var getAllSessions = function () {
      Practice.getAll()
        .then(function (sessions) {
          console.log('client side sessions looks like: ', sessions);
          $scope.data.sessions = sessions.data;
        })
        .then(function () {
          $location.path('/');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getAllSessions();
    
});