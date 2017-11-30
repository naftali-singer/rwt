RWTApp.controller("PupilGalleryCtrl", function ($scope, $http, $location, activeUser, User) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
//        $scope.greetName = activeUser.get().firstName;

        // Making sure that we are only loading once
        if (pupils.getAll().length === 0) {
            $scope.pupilArr = [];
            $http.get("app/data/users.json").then(function(response) {
                alert(JSON.stringify(response));
                pupils.load(response.data);
                $scope.pupilArr = pupils.getAll();
            });
        } else {
            $scope.pupilArr = pupils.getAll();
        }
    
//        $scope.openDetails = function(index) {
//            $location.path("/recipes/" + index)
//        }

//        $scope.playWord = function (soundUrl) {
//            var audio = new Audio(soundUrl);
//            audio.play();  
//        }

});
    