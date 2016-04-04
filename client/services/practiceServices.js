angular.module('PracticeService', [])

  .factory('Practice', ['$http', function($http) {

    return {
      // call to get all practiceSessions
      get : function() {
          return $http.get('/api/sessions');
      },

      // these will work when more API routes are defined on the Node side of things
      // call to POST and create a new practiceSession
      create : function(sessionData) {
          return $http.post('/api/sessions', sessionData);
      },

      // call to DELETE a practiceSession
      // TODO: allow the user to delete a practice session based on a date or click
      delete : function(date) {
          return $http.delete('/api/sessions/' + date);
      }
    }       
}]);