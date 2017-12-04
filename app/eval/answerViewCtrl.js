RWTApp.controller("AnswerViewCtrl", function ($scope, $http, $location, activeUser, Answer, answers) {
    
        // If the user is not logged in or not a pupil redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isPupil()) {
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
                    if (response.data[i].userId === activeUser.get().userId) {
                        answers.add(new Answer(response.data[i]));
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
        $scope.queryByQuizId = function(answer) {
            if ($scope.queryPropty === undefined || $scope.queryPropty === "") {
                return true;
            }
            var queryProptyLowerCase = $scope.queryPropty.toLowerCase();
            var quizId = answer.quizId.toLowerCase();
            if (quizId.includes(queryProptyLowerCase)) {
                return true;
            } else {
                return false;
            }
        }

});
