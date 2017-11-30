RWTApp.controller("QuizViewCtrl", function ($scope, $location, activeUser,  $routeParams, Quiz, quizzes) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
        // Creating a copy of the quiz object so changes won't be reflected on the array
        $scope.quiz = new Quiz(quizzes.get($routeParams.quizIndex));
    
        $scope.cancel = function() {
            $location.path("/quizzes");
        }
    
        $scope.update = function() {
            quizzes.update($routeParams.quizIndex, $scope.quiz);
            $location.path("/quizzes");
        }
    
        $scope.remove = function() {
            quizzes.remove($routeParams.quizIndex);
            $location.path("/quizzes");
        }
        
    })
    