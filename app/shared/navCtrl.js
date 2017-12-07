RWTApp.controller("NavCtrl", function ($scope, activeUser) {
    
    //$scope.isLoggedIn = activeUser.isLoggedIn();
    

    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };

    $scope.isPupil = function() {
        return activeUser.isPupil();
    };

    $scope.isTeacher = function() {
        return activeUser.isTeacher();
    };

    
});