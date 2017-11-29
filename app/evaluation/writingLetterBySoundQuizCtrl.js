RWTApp.controller("WritingLetterBySoundQuizCtrl", function ($scope, $http, $location, activeUser, letters, Letter, quizzes, Answersheet, answersheets) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
//        $scope.greetName = activeUser.get().firstName;
    
        // Making sure that we are only loading once
        if (letters.getAll().length === 0) {
            $scope.letterArr = [];
            $http.get("app/data/letters.json").then(function(response) {
                alert(JSON.stringify(response));
                letters.load(response.data);
                $scope.letterArr = letters.getAll();
            });
        } else {
            $scope.letterArr = letters.getAll();
        }
    
//        $scope.openDetails = function(index) {
//            $location.path("/recipes/" + index)
//        }

        $scope.playLetter = function (nameUrl) {
            var audio = new Audio(nameUrl);
            audio.play();  
        }

        $scope.verifyLetter = function (index, symbol) {
            if ($scope.letterArr[index].symbol === symbol) {
                return true;
            } else {
                return false;
            }
        }

});
    