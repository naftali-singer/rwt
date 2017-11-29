RWTApp.controller("QuizGalleryCtrl", function ($scope, $http, $location, activeUser, Quiz, quizzes) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
//        $scope.greetName = activeUser.get().firstName;
    
        // Making sure that we are only loading once
        if (quizzes.getAll().length === 0) {
            $scope.quizArr = [];
            $http.get("app/data/quizzes.json").then(function(response) {
                alert(JSON.stringify(response));
                quizzes.load(response.data);
                $scope.quizArr = quizzes.getAll();
            });
        } else {
            $scope.quizArr = quizzes.getAll();
        }
    
        $scope.dispQuizView = function(index) {
            $location.path("/quizzes/" + index)
        }

//        $scope.playWord = function (soundUrl) {
//            var audio = new Audio(soundUrl);
//            audio.play();  
//        }


});
    