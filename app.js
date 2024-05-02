var app = angular.module("myApp", []);
let mainBody = document.body;
mainBody.style.overflow = "hidden";

app.controller("myControl", function ($scope, $http) {
  $scope.loader = true;
  $http
    .get(
      "https://script.google.com/macros/s/AKfycbwueetEflK38AQFISDJ_lYWcF--LG4BddV4Y1OpkfsTX7IpPo43Vizk2bhCm6XzI_Q_/exec"
    )
    .then((response) => {
      $scope.data = response.data;
      mainBody.style.overflow = "auto";
      $scope.loader = false;
    });
});
