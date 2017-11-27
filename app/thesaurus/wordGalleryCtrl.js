RWTApp.controller("WordGalleryCtrl", function ($scope, $http, $location, activeUser, Word, words) {
    
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
                for (var i = 0; i < response.data.length; i++) {
                    $scope.wordArr.push(new Word(response.data[i]));
                }
//                words.load(response.data);
//                $scope.recipeArr = recipes.getAll();
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


});
    