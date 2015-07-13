var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query=';
var topAlbumUrl = 'https://api.spotify.com/v1/artists/{' +  idArtist + '}/top-tracks?country=US';
var myApp = angular.module('myApp', []);
var idArtist;

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
	$scope.audioObject = {};
	$scope.getSongs = function() {
		$http.get(baseUrl + $scope.track).success(function(response){
      	idArtist = response.tracks.items.id; 
      })
      	$http.get(topAlbumUrl).success(function(response){
      	data = $scope.tracks = response.tracks; 
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