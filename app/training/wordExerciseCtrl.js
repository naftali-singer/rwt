RWTApp.controller("WordExerciseCtrl", function ($scope, $http, $location, activeUser, Word, words) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
//        $scope.greetName = activeUser.get().firstName;
    
        // Making sure that we are only loading once
        if (words.getAll().length === 0) {
            $scope.wordArr = [];
            $http.get("app/data/word.json").then(function(response) {
                alert(JSON.stringify(response));
                words.load(response.data);
                $scope.wordArr = words.getAll();
            });
        } else {
            $scope.wordArr = words.getAll();
        }
    
//        $scope.openDetails = function(index) {
//            $location.path("/recipes/" + index)
//        }

        $scope.playWord = function (soundUrl) {
            var audio = new Audio(soundUrl);
            audio.play();  
        }

        $scope.verifyWord = function (index, symbol) {
            if ($scope.wordArr[index].symbol === symbol) {
                return true;
            } else {
                return false;
            }
        }


});
    