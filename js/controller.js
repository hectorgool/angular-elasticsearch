(function(){

  'use strict';

  var app = angular.module('myApp.controllers', []);
  
  app.controller('PostsCtrl', ['$scope', 'PostsFactory', 
    function ($scope, PostsFactory) {

      $scope.posts = null;

      PostsFactory.query( function( jsonArray ){
        //console.log( jsonArray );
        $scope.posts = jsonArray;
      });   
      
    }
  ]);


})();



angular.module('notesApp', [])
  .controller('ListCtrl', [function() {

    var self = this;

    self.items = [
      {id: 1, label: 'First', done: true},
      {id: 2, label: 'Second', done: false}
    ];

    self.getDoneClass = function(item) {
      return {
        finished: item.done,
        unfinished: !item.done
      };
    };

  }
]);


var myApp = angular.module('myApp',[]);

myApp.controller('HelloWorldController', ['$scope', function($scope) {

  $scope.greeting = 'Hello World!';
  
}]);
