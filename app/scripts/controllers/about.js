'use strict';

angular.module('portfolioApp')

.controller('AboutCtrl', ['$scope','AboutService', function($scope,AboutService) {
    console.log("About Controller");
    

    angular.element(document).ready(function () {
        document.getElementById("pageDesc").innerHTML = "Discover who I am as a person aside from being a developer";
        document.getElementById("pageTitle").innerHTML = "MY PASSION AND<br> PERSONALITY";
        document.getElementById("pageBtn").style.display="none";
  //  document.getElementById("myJumbo").style.backgroundImage = "url('../app/assets/bg5.jpg')";

    });
    
    AboutService.getInstaData()
        .then(function(data){
        $scope.imgSrc=data;
        console.log($scope.imgSrc);
        

        }).catch(function(data){
            console.log("Error" + data); 
        });
//        Generate Random numbers    
    


}])

.factory('AboutService',['instagramFactory', function(instagramFactory) {
    
    var objFac={};
    objFac.getInstaData=function(){
        var _access_token = "528654286.6e1becc.1619a4ba80504dccb3eeab80dd1fc734";
        return instagramFactory.getMediaFromUserById({
            userId:"528654286",
            access_token:_access_token,
        }).then(function(_data){
        //    console.info("user by id", _data);
            var nums = [1,2,3,4,5,6,7,8,9,10],
            ranNums = [],
            i = nums.length,
            j = 0;

            while (i--) {
                j = Math.floor(Math.random() * (i+1));
                ranNums.push(_data.data.data[nums[j]].images.standard_resolution.url);
                nums.splice(j,1);
            }

            return ranNums;

        }).catch(function(_data){
        //    console.info("user by id", _data);
            return _data;
        });
    }

    return objFac;
    
    
}]);

//