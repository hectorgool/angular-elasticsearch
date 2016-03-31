(function() {
  'use strict';
  var app, dependencies;

  dependencies = ['ngResource', 'myApp.services'];

  app = angular.module('elasticsearch', dependencies);

  //$scope.term = '';

  app.controller('ElasticSearchCtrl', [
    '$scope', 'ElasticSearchQuery', '$location', function($scope, ElasticSearchQuery, $location) {

      $scope.term = '';

      $scope.onKeyUpSendTerm = function() {
        
        $scope.jsonTerm = {
          'term': $scope.term
        };

        console.log('$scope.jsonTerm:' + JSON.stringify($scope.jsonTerm));

        
        ElasticSearchQuery.query({}, $scope.jsonTerm, (function(response) {
          console.log('Success:' + JSON.stringify(response));
          $scope.jsonResponse = response;
        }), function(errorResponse) {
          console.log('Error:' + JSON.stringify(errorResponse));
        });
        

      };
    }
  ]);

}).call(this);

//# sourceMappingURL=ElasticSearchCtrl.js.map
