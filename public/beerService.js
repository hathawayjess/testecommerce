angular.module('beer')
.factory('beerService', function($http) {
  return {

    getBeer: function() {
      return $http.get('/api/beer').then(function(response) {
        console.log(response.data);
        return response.data;
      })
    }
  }
})
