'use strict';

angular.module('portfolioApp')
  
.controller('ResumeCtrl', ['$scope', function($scope) {
    console.log("Resume Fixed");
    angular.element(document).ready(function () {
        document.getElementById("pageDesc").innerHTML = "For what I've accomplised over the years";
        document.getElementById("pageTitle").innerHTML = "DIG A LITTLE DEEPER";
        document.getElementById("pageBtn").style.display="inline";
  //  document.getElementById("myJumbo").style.backgroundImage = "url('../app/assets/bg5.jpg')";
        
      $('.progress .progress-bar').css("width",function() {          
          return $(this).attr("aria-valuenow") + "%";
      })

    });

}]);