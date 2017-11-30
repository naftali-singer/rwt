RWTApp.controller("UserGalleryCtrl", function ($scope, $http, $location, activeUser, User) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
//        $scope.greetName = activeUser.get().firstName;
/*    
        // Making sure that we are only loading once
        if (users.getAll().length === 0) {
            $scope.userArr = [];
            $http.get("app/data/users.json").then(function(response) {
                alert(JSON.stringify(response));
                users.load(response.data);
                $scope.wordArr = users.getAll();
            });
        } else {
            $scope.userArr = users.getAll();
        }
    
//        $scope.openDetails = function(index) {
//            $location.path("/recipes/" + index)
//        }

//        $scope.playWord = function (soundUrl) {
//            var audio = new Audio(soundUrl);
//            audio.play();  
//        }

*/
});
    