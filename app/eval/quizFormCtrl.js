RWTApp.controller("QuizFormCtrl", function ($scope, $location, activeUser, Quiz, quizzes) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
        $scope.quiz = new Quiz({});
    
        $scope.cancel = function () {
            $location.path("/Quizzes");
        }
    
        $scope.create = function () {
            quizzes.add($scope.quiz);
            $location.path("/Quizzes");
        }

    });
