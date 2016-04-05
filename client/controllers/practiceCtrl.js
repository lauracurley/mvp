angular.module('PracticeCtrl', [])

  .controller('PracticeController', function($scope, $location, Practice) {

    $scope.test = 'Enter how long you meditated & rate the session:';   
    $scope.practice = {};
    $scope.data = {};
    // total minutes meditated
    $scope.total = 0; 
    // average rating over all sessions
    $scope.rating = 0;

    // adds a practice session to the database
    $scope.totalMinutesMeditated = function () {
      $scope.data.sessions.forEach(function (item) {
        console.log('This is item', item);
        $scope.total += item['minutes'];
      })
    };

    $scope.avgRating = function () {
      var count = 0;
      var allRatings = 0;
      $scope.data.sessions.forEach(function (item) {
        count++;
        allRatings += item['rating'];
      });
      $scope.rating = allRatings / count;
    };

    $scope.create = function () {
      console.log('scope practice on submit', $scope.practice);
      Practice.create($scope.practice)
        .then(function () {
          $scope.avgRating();
          $scope.totalMinutesMeditated();
          $location.path('/');
        })
        .catch(function (error) {
          console.log('Error in creating a session: ', error);
        });
    };

    // gets all practice sessions from the database
    var getAllSessions = function () {
      Practice.getAll()
        .then(function (sessions) {
          console.log('client side sessions looks like: ', sessions);
          $scope.data.sessions = sessions.data;
        })
        .then(function () {
          $scope.avgRating();
          $scope.totalMinutesMeditated();
          $location.path('/');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    // initialize app by getting all the practice sessions for display
    getAllSessions();

    
});