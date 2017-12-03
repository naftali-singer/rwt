RWTApp.controller("ExerWSbySCtrl", function ($scope, $http, $location, activeUser, syllables, Syllable) {
    
        // Making sure that we load only once
        if (syllables.getAll().length === 0) {
            $scope.syllableArr = [];
            $http.get("app/data/syllables.json").then(function(response) {
//                alert(JSON.stringify(response));
                syllables.load(response.data);
                $scope.syllableArr = syllables.getAll();
            });
        } else {
            $scope.syllableArr = syllables.getAll();
        }
    
        $scope.playSyllable = function (soundUrl) {
            var audio = new Audio(soundUrl);
            audio.play();  
        }

        $scope.verifySyllable = function (index, symbol) {
            if ($scope.syllableArr[index].symbol === symbol) {
                return true;
            } else {
                return false;
            }
        }

});
    