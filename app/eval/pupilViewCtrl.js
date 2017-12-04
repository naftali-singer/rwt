RWTApp.controller("PupilViewCtrl", function ($scope, $location, activeUser,  $routeParams, Pupil, pupils) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
        // Creating a copy of the pupil object so changes won't be reflected on the array
        $scope.pupil = new Pupil(pupils.get($routeParams.pupilIndex));
    
        $scope.cancel = function() {
            $location.path("/Pupils");
        }
    
        $scope.update = function() {
            pupils.update($routeParams.pupilIndex, $scope.pupil);
            $location.path("/Pupils");
        }
    
        $scope.remove = function() {
            pupils.remove($routeParams.pupilIndex);
            $location.path("/Pupils");
        }
        
    })
    