var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='
var artistId;
var topUrl = 'https://api.spotify.com/v1/artists/'
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  $scope.getSongs = function() {
    $http.get(baseUrl + $scope.track).success(function(response){
      artistId= response.tracks.items[0].artists[0].id;
      	$http.get(topUrl + artistId +  '/top-tracks?country=US').success(function(response){
      	data = $scope.tracks = response.tracks;
    	})
    })
  }
  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }
})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});