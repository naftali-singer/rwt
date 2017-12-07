RWTApp.controller("QuizGalleryCtrl", function ($scope, $http, $location, activeUser, Quiz, quizzes) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
        // Making sure that we are only loading once
        if (quizzes.getAll().length === 0) {
            $scope.quizArr = [];
            $http.get("app/data/quizzes.JSON").then(function(response) {
//                alert(JSON.stringify(response));
                quizzes.load(response.data);
                $scope.quizArr = quizzes.getAll();
            });
        } else {
            $scope.quizArr = quizzes.getAll();
        }
    
        $scope.sortBy = function(propty) {
            $scope.orderPropty = propty;
        }
        
        // Custom query function
        $scope.queryByQuizIdTitle = function(quiz) {
            if ($scope.queryPropty === undefined || $scope.queryPropty === "") {
                return true;
            }
            var queryProptyLowerCase = $scope.queryPropty.toLowerCase();
            var quizId = quiz.quizId.toLowerCase();
            var title = quiz.title.toLowerCase();
            if (quizId.includes(queryProptyLowerCase) || title.includes(queryProptyLowerCase)) {
                return true;
            } else {
                return false;
            }
        }

        $scope.dispQuizForm = function () {
            // Updating the URL
            $location.path("/Quizzes/form")
        }
                
        $scope.dispQuizView = function(quiz) {
            // Getting the index of the quiz in the array
            var quizIndex = $scope.quizArr.indexOf(quiz);
            // Updating the URL
            $location.path("/Quizzes/" + quizIndex)
        }

});
    