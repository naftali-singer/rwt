RWTApp.controller("PupilFormCtrl", function ($scope, $location, pupils, activeUser, Pupil) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
        $scope.pupil = new Pupil({});
    
        $scope.cancel = function () {
            $location.path("/Pupils");
        }
    
        $scope.create = function () {
            pupils.add($scope.pupil);
            $location.path("/Pupils");
        }
    });