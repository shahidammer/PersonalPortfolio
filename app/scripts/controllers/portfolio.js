'use strict';

angular.module('portfolioApp')
  
.controller('PortfolioCtrl', ['$scope', function($scope) {
    console.log("Portfolio Fixed");
    angular.element(document).ready(function () {
        document.getElementById("pageDesc").innerHTML = "Welcome to workspace";
        document.getElementById("pageTitle").innerHTML = "Welcome";
        document.getElementById("pageBtn").style.display="none";
  //  document.getElementById("myJumbo").style.backgroundImage = "url('../app/assets/bg5.jpg')";

    });



}]);