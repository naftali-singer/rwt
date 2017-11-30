RWTApp.controller("ExerWLbySCtrl", function ($scope, $http, $location, activeUser, letters, Letter) {
    
        // If the user is not logged in going back to home screen
//        if (!activeUser.isLoggedIn()) {
//            $location.path("/");
//            return;
//        }
    
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

        $scope.playLetter = function (soundUrl) {
            var audio = new Audio(soundUrl);
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
    