RWTApp.controller("ExerWLbySCtrl", function ($scope, $http, $location, activeUser, letters, Letter) {
    
        // Making sure that we load only once
        if (letters.getAll().length === 0) {
            $scope.letterArr = [];
            $http.get("app/data/letters.JSON").then(function(response) {
//                alert(JSON.stringify(response));
                letters.load(response.data);
                $scope.letterArr = letters.getAll();
            });
        } else {
            $scope.letterArr = letters.getAll();
        }
    
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
    