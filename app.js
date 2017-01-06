(function () {
  'use strict'

  angular.module('myFirstApp', [])
  .controller('LunchController', function ($scope) {
    $scope.lunchItems = "";

    $scope.getItems = function () {
      $scope.message = "";
      if($scope.lunchItems.trim() == '') {
        $scope.message = "Error - Please enter data first";
        return;
      }
      var arrayOfStrings = $scope.lunchItems.split(',');
      if(arrayOfStrings.length > 3) {
        $scope.message = "Error - Too Much";
        return;
      }
      $scope.message = "Enjoy!";
    };

});

})();
