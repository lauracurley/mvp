angular.module('PracticeService', [])

  .factory('Practice', ['$http', function($http) {

    return {
      // call to get all practiceSessions
      getAll : function() {
        return $http.get('/sessions');
      },

      // call to POST and create a new practiceSession
      create : function(sessionData) {
        console.log('Client side create submission is submitting: ', sessionData);
        return $http.post('/add-session', sessionData);
      }

      // call to DELETE a practiceSession
      // TODO: allow the user to delete a practice session based on a date or click
      // delete : function(date) {
      //   return $http.delete('/api/sessions/' + date);
      // }
    }       
}]);