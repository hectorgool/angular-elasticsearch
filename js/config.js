(function(){

  'use strict';


  var dependencies = ['ngResource', 'ngRoute', 'elasticsearch'];

  var app = angular.module('myApp', dependencies);
  app.config( function( $routeProvider ){   

    $routeProvider.when('/', {
      templateUrl: 'partials/view1.html',
      controller: 'ElasticSearchCtrl'
      //controller: 'ElasticSearchCtrl'
    });   


    $routeProvider.when('/signup', {
      templateUrl: 'partials/view2.html'//,
      //controller: 'PostCtrl'
    });
    

    $routeProvider.otherwise({
      templateUrl:'partials/404.html'
    });

  }); 

})();
