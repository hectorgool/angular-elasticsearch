(function(){

	'use strict';
 
	var app = angular.module('myApp.services', []);

	app.factory('PostsFactory', function ($resource) {
		return $resource('documents.json', {
			//GET, empty, Returns all posts
			query: { method: 'GET', isArray: true },
			//POST, JSON String Create new post
			save: { method: 'POST', isArray: true } 
		})
	});		

})();