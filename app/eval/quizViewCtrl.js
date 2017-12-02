RWTApp.controller("QuizViewCtrl", function ($scope, $location, activeUser,  $routeParams, Quiz, quizzes) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
        // Creating a copy of the quiz object so changes won't be reflected on the array
        $scope.quiz = new Quiz(quizzes.get($routeParams.quizIndex));
    
        $scope.cancel = function() {
            $location.path("/Quizzes");
        }
        // no update or deletion of a quiz
/*
        $scope.update = function() {
            quizzes.update($routeParams.quizIndex, $scope.quiz);
            $location.path("/Quizzes");
        }
    
        $scope.remove = function() {
            quizzes.remove($routeParams.quizIndex);
            $location.path("/Quizzes");
        }
*/        
    })
    