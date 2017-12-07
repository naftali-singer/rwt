RWTApp.controller("PupilQuizCtrl", function ($scope, $http, $location, activeUser, pupilQuizzes, PupilQuiz) {
    
        // If the user is not logged in or not a pupil redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isPupil()) {
            $location.path("/");
            return;
        }
    
        $scope.greetName = activeUser.get().firstName;        
    
        // Making sure that we are only loading once
        if (pupilQuizzes.getAll().length === 0) {
            $scope.pupilQuizArr = [];
            $http.get("app/data/pupilquiz.JSON").then(function(response) {
//                alert(JSON.stringify(response));
                pupilQuizzes.load(response.data);
                $scope.pupilQuizArr = pupilQuizzes.getAll();
            });
        } else {
            $scope.pupilQuizArr = pupilQuizzes.getAll();
        }

        $scope.playSymbol = function (soundUrl) {
            var audio = new Audio(soundUrl);
            audio.play();  
        }

        $scope.verifySymbol = function (index, symbol) {
            if ($scope.pupilQuizArr[index].symbol === symbol) {
                return true;
            } else {
                return false;
            }
        }

        $scope.notImagedSymbol = function (index) {
            if ($scope.pupilQuizArr[index].imageUrl === "") {
                return true;
            } else {
                return false;
            }
        }

        $scope.savePupilAns = function (index, pupilAns) {
            $scope.pupilQuizArr[index].pupilAns = pupilAns;
        }

        $scope.cancel = function () {
            $location.path("/ProgressPupil");
        }
    
        $scope.evaluateQuiz = function () {
            var correctAns = 0;
            for (var i = 0; i < $scope.pupilQuizArr.length; i++) {
                if ($scope.pupilQuizArr[i].symbol === $scope.pupilQuizArr[i].pupilAns) {
                    correctAns = correctAns + 1;
                }
            }
            var score = (correctAns / $scope.pupilQuizArr.length) * 100;
            alert("score: " + score);
            $location.path("/ProgressPupil");          
            return score;
        }

});
