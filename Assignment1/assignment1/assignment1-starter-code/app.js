(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      $scope.items  = "";
      $scope.message = "";
      $scope.checkIfTooMuch = function(){
        if($scope.items) {
          var itemsEntered = $scope.items.split(',');
          if(itemsEntered.length < 1) {
            $scope.message = "Please enter data first.";
          }
          else if(itemsEntered.length <= 3) {
            $scope.message = "Enjoy!"
          }
          else if(itemsEntered.length > 3) {
            $scope.message = "Too much";
          }
        }
        else {
          $scope.message = "Please enter data first";
        }
      };
    }
})();
