RWTApp.controller("LoginCtrl", function ($scope, $rootScope, $uibModalInstance, $http, $location, activeUser, User) {

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }
//        alert(JSON.stringify($scope.users));
    });

    $scope.failedAttempt = false;

    $scope.login = function () {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
// alert(JSON.stringify(activeUser.get()));
            if (activeUser.isTeacher()) {
                for (var i = 0; i < $scope.users.length; i++) {
                    if ($scope.users[i].role === "pupil" && $scope.users[i].teacherId === activeUser.get().userId) {
                        $rootScope.pupilsOfTeacher[i] = $scope.users[i].userId;
                    }
                }                        
// alert(JSON.stringify($rootScope.pupilsOfTeacher));
            }
            $uibModalInstance.close("Logged-in");
            if (activeUser.isTeacher()) {
                $location.path("/ProgressTeacher")                            
            }
            if (activeUser.isPupil()) {
                $location.path("/ProgressPupil")                            
            }
        } else {
            $scope.failedAttempt = true;
        }
    }

    var getLoggedInUser = function () {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].userId === $scope.userId && $scope.users[i].userPswd === $scope.userPswd) {
                return $scope.users[i];
            }
        }
        return null;
    }

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
});
