RWTApp.controller("AnswerGalleryCtrl", function ($scope, $http, $location, activeUser, Answer, answers) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
//        $scope.greetName = activeUser.get().firstName;
    
        // Making sure that we are only loading once
        if (answers.getAll().length === 0) {
            $scope.answerArr = [];
            $http.get("app/data/answers.json").then(function(response) {
                alert(JSON.stringify(response));
                answers.load(response.data);
                $scope.answerArr = answers.getAll();
            });
        } else {
            $scope.answerArr = answers.getAll();
        }
    
//        $scope.openDetails = function(index) {
//            $location.path("/recipes/" + index)
//        }

//        $scope.playWord = function (soundUrl) {
//            var audio = new Audio(soundUrl);
//            audio.play();  
//        }

});
    