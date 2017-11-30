RWTApp.controller("LoginCtrl", function ($scope, $uibModalInstance, $http, $location, activeUser, User) {

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }
        alert(JSON.stringify($scope.users));
    });

    $scope.failedAttempt = false;

    $scope.login = function () {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
            $uibModalInstance.close("Logged-in");
            $location.path("/progress");
            if (user.role === "pupil" && user.quizId !== "000") {
                $location.path("/quizzes");
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
