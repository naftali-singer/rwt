RWTApp.controller("PupilGalleryCtrl", function ($scope, $http, $location, activeUser, User, pupils, Pupil) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
        $scope.greetName = activeUser.get().firstName;

        // Making sure that we are only loading once
        if (pupils.getAll().length === 0) {
            $scope.pupilArr = [];
            $http.get("app/data/users.json").then(function(response) {
                alert(JSON.stringify(response));
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i].teacherId === activeUser.get().userId) {
                        pupils.add(new Pupil(response.data[i]));
                    }
                }
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

      $scope.sortBy = function(propty) {
        $scope.orderPropty = propty;
      }
      
      // Custom query function
      $scope.queryByName = function(pupil) {
        if ($scope.queryPropty === undefined || $scope.queryPropty === "") {
          return true;
        }
        var queryProptyLowerCase = $scope.queryPropty.toLowerCase();
        var firstName = pupil.firstName.toLowerCase();
        var lastName = pupil.lastName.toLowerCase();
        if (firstName.includes(queryProptyLowerCase) || lastName.includes(queryProptyLowerCase)) {
          return true;
        } else {
          return false;
        }
      }
      
//      $scope.openCar = function (car) {
        // Getting the index of the car in the array
//        var carIndex = $scope.cars.indexOf(car);

        // Updating the URL
//        $location.path("/cars/" + carIndex)
//      }




});
    