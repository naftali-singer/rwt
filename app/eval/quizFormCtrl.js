RWTApp.controller("QuizFormCtrl", function ($scope, $location, activeUser, Quiz, quizzes) {
    
        // If the user is not logged in or not a teacher redirect home screen
        if (!activeUser.isLoggedIn() || !activeUser.isTeacher()) {
            $location.path("/");
            return;
        }
    
        $scope.quiz = new Quiz({});
//        $scope.editedQuestn = "ba na na";
    
        $scope.cancel = function () {
            $location.path("/Quizzes");
        }
    
        $scope.create = function () {
//            alert($scope.editedQuestn);
//            var editedQuestnArr = [];
//            editedQuestnArr = $scope.editedQuestn.split(" ");
//            alert(editedQuestnArr);
//            $scope.quiz.questn = "[";
//            for (var i = 0; i < editedQuestnArr.length - 1 ; i++) {
//                $scope.quiz.questn[i] = editedQuestnArr[i];
//                $scope.quiz.questn = $scope.quiz.questn + '"' + editedQuestnArr[i] + '",';
//                alert($scope.quiz.questn);
//            }
//            $scope.quiz.questn = $scope.quiz.questn + '"' + editedQuestnArr[i] + '"]';
//            alert($scope.quiz.questn);
//            alert(JSON.stringify($scope.quiz));
            quizzes.add($scope.quiz);
            $location.path("/Quizzes");
        }

    });