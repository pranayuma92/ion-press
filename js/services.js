angular.module('starter.services', [])

.service('DataService', function($http, apiUrl){
	this.fetchPosts = function(){
		return $http({
			method: 'GET',
			url: (apiUrl + 'posts?_embed')
		})
	};

	this.fetchPostsById = function(id){
		return $http({
			method: 'GET',
			url: (apiUrl + 'posts/' + id)
		})
	};

	this.fetchPostFeaturedImage = function(f_id){
		return $http({
			method: 'GET',
			url: (apiUrl + 'media/' + f_id)
		})
	};

	this.fetchPostAuthor =  function(a_id){
		return $http({
			method: 'GET',
			url: (apiUrl + 'users/' + a_id)
		})
	};

	this.fetchPostCategory = function(p_id){
		return $http({
			methode: 'GET',
			url: (apiUrl + 'categories?post=' + p_id)
		})
	};
})