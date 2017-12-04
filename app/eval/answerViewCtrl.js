RWTApp.controller("AnswerGalleryCtrl", function ($scope, $http, $location, activeUser, Answer, answers, quizzes) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn() || !activeUser.isPupil()) {
            $location.path("/");
            return;
        }
    
        $scope.greetName = activeUser.get().firstName;
    
        // Making sure that we are only loading once
        if (answers.getAll().length === 0) {
            $scope.answerArr = [];
            $http.get("app/data/answers.json").then(function(response) {
                alert(JSON.stringify(response));
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
    
//        $scope.openDetails = function(index) {
//            $location.path("/recipes/" + index)
//        }

//        $scope.playWord = function (soundUrl) {
//            var audio = new Audio(soundUrl);
//            audio.play();  
//        }

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
        
        $scope.dispQuizTitle = function (quizId) {
            return quizzes.getQuizByQuizId(quizId).title;
        }

        $scope.dispanswerForm = function () {
           // Updating the URL
            $location.path("/Progress/form")
        }

  $scope.dispAnswerView = function (answer) {
    // Getting the index of the pupil in the array
    alert(JSON.stringify($scope.answerArr));
    var answerIndex = $scope.answerArr.indexOf(answer);
    // Updating the URL
    $location.path("/Progress/" + answerIndex)
  }



});
    