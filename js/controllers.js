angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, DataService) {
  DataService.fetchPosts().then(function(response){
    $scope.posts = response.data;
    console.log($scope.posts);
  });
})

.controller('PlaylistCtrl', function($scope, $stateParams,DataService) {
  DataService.fetchPostsById($stateParams.id).then(function(response){
    $scope.datapost = response.data;
    console.log($scope.datapost);

    DataService.fetchPostFeaturedImage($scope.datapost.featured_media).then(function(response){
      $scope.f_image = response.data;
      console.log($scope.f_image);
    });

    DataService.fetchPostAuthor($scope.datapost.author).then(function(response){
      $scope.author = response.data;
      console.log($scope.author);
    });
  });

  DataService.fetchPostCategory($stateParams.id).then(function(response){
    $scope.categories = response.data;
    console.log($scope.categories);
  })

  
});
