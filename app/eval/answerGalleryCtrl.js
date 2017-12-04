RWTApp.controller("AnswerGalleryCtrl", function ($scope, $rootScope, $http, $location, activeUser, Answer, answers, quizzes) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
     
        $scope.greetName = activeUser.get().firstName;
    
        // Making sure that we are only loading once
        if (answers.getAll().length === 0) {
            $scope.answerArr = [];
            $http.get("app/data/answers.json").then(function(response) {
//                alert(JSON.stringify(response));
                for (var i = 0; i < response.data.length; i++) {
                    for (var j = 0; j < $rootScope.pupilsOfTeacher.length; j++) {
                        if (response.data[i].userId === $rootScope.pupilsOfTeacher[j]) {
                            answers.add(new Answer(response.data[i]));
                        }
                    }
                }
                $scope.answerArr = answers.getAll();
            });
        } else {
            $scope.answerArr = answers.getAll();
        }
    
        $scope.sortBy = function(propty) {
            $scope.orderPropty = propty;
        }
  
        // Custom query function
        $scope.queryByUserIdQuizId = function(answer) {
            if ($scope.queryPropty === undefined || $scope.queryPropty === "") {
                return true;
            }
            var queryProptyLowerCase = $scope.queryPropty.toLowerCase();
            var userId = answer.userId.toLowerCase();
            var quizId = answer.quizId.toLowerCase();
            if (userId.includes(queryProptyLowerCase) || quizId.includes(queryProptyLowerCase)) {
                return true;
            } else {
                return false;
            }
        }

});
    