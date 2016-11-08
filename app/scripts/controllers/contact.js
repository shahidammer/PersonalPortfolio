'use strict';
var loc="https://www.google.com/maps/place/Easy+Mart/@31.3745324,74.1790987,14.18z/data=!4m5!3m4!1s0x3918ff8ea3e4bd5b:0x6039474a8b53565d!8m2!3d31.3720107!4d74.1881896"


angular.module('portfolioApp')
  
.controller('ContactCtrl', ['$scope', function($scope) {
    console.log("Contact Fixed");
    angular.element(document).ready(function () {
        document.getElementById("pageDesc").innerHTML = "Reach out and send me a friendly hello";
        document.getElementById("pageTitle").innerHTML = "Let's have a chat";
        document.getElementById("pageBtn").style.display="none";
  //  document.getElementById("myJumbo").style.backgroundImage = "url('../app/assets/bg5.jpg')";

    });
    
    $scope.locationUrl=loc;
    $scope.master={};
    $scope.submitForm=function(user){
        $scope.master=angular.copy(user);
        console.log($scope.master);   
    }

}]);
