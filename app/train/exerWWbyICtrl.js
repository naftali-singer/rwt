RWTApp.controller("ExerWWbyICtrl", function ($scope, $http, $location, activeUser, Word, words) {
    
        // Making sure that we load only once
        if (words.getAll().length === 0) {
            $scope.wordArr = [];
            $http.get("app/data/words.json").then(function(response) {
//                alert(JSON.stringify(response));
                words.load(response.data);
                $scope.wordArr = words.getAll();
            });
        } else {
            $scope.wordArr = words.getAll();
        }
    
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

        $scope.notImagedWord = function (index) {
            if ($scope.wordArr[index].imageUrl === "") {
                return true;
            } else {
                return false;
            }
        }

});
    