RWTApp.controller("AnswersheetGalleryCtrl", function ($scope, $http, $location, activeUser, Answersheet, answersheets) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
//        $scope.greetName = activeUser.get().firstName;
    
        // Making sure that we are only loading once
        if (answersheets.getAll().length === 0) {
            $scope.answersheetArr = [];
            $http.get("app/data/answersheets.json").then(function(response) {
                alert(JSON.stringify(response));
                answersheets.load(response.data);
                $scope.answersheetArr = answersheets.getAll();
            });
        } else {
            $scope.answersheetArr = answersheets.getAll();
        }
    
//        $scope.openDetails = function(index) {
//            $location.path("/recipes/" + index)
//        }

//        $scope.playWord = function (soundUrl) {
//            var audio = new Audio(soundUrl);
//            audio.play();  
//        }


});
    