RWTApp.controller("SyllableGalleryCtrl", function ($scope, $http, $location, activeUser, syllables, Syllable) {
    
        // If the user is not logged in going back to home screen
//        if (!activeUser.isLoggedIn()) {
//            $location.path("/");
//            return;
//        }
    
//        $scope.greetName = activeUser.get().firstName;
    
        // Making sure that we are only loading once
        if (syllables.getAll().length === 0) {
            $scope.syllableArr = [];
            $http.get("app/data/syllables.json").then(function(response) {
                alert(JSON.stringify(response));
                syllables.load(response.data);
                $scope.syllableArr = syllables.getAll();
            });
        } else {
            $scope.syllableArr = syllables.getAll();
        }
    
//        $scope.openDetails = function(index) {
//            $location.path("/recipes/" + index)
//        }

        $scope.playSyllable = function (soundUrl) {
            var audio = new Audio(soundUrl);
            audio.play();  
        }

});
    