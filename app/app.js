var RWTApp = angular.module("RWTApp", ["ngRoute", "ngAnimate", "ui.bootstrap"])
.run(function($rootScope) {
    $rootScope.pupilsOfTeacher = [];
});

RWTApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/Letters", {
            templateUrl: "app/vocab/letterGallery.html",
            controller: "LetterGalleryCtrl"
        })
        .when("/Syllables", {
            templateUrl: "app/vocab/syllableGallery.html",
            controller: "SyllableGalleryCtrl"
        })
        .when("/Words", {
            templateUrl: "app/vocab/wordGallery.html",
            controller: "WordGalleryCtrl"
        })
        .when("/ExerWLbyS", {
            templateUrl: "app/train/exerWLbyS.html",
            controller: "ExerWLbySCtrl"
        })
        .when("/ExerWSbyS", {
            templateUrl: "app/train/exerWSbyS.html",
            controller: "ExerWSbySCtrl"
        })
        .when("/ExerWWbyS", {
            templateUrl: "app/train/exerWWbyS.html",
            controller: "ExerWWbySCtrl"
        })
        .when("/ExerWWbyI", {
            templateUrl: "app/train/exerWWbyI.html",
            controller: "ExerWWbyICtrl"
        })
        .when("/ExerWSbyS", {
            templateUrl: "app/train/exerWSbyS.html",
            controller: "ExerWSbySCtrl"
        })
        .when("/PupilQuiz", {
            templateUrl: "app/eval/pupilQuiz.html",
            controller: "PupilQuizCtrl"
        })
        .when("/Pupils", {
            templateUrl: "app/eval/pupilGallery.html",
            controller: "PupilGalleryCtrl"
        })
        .when("/Pupils/form", {
            templateUrl: "app/eval/pupilForm.html",
            controller: "PupilFormCtrl"
        })
        .when("/Pupils/:pupilIndex", {
            templateUrl: "app/eval/pupilView.html",
            controller: "PupilViewCtrl"
        })
        .when("/Quizzes", {
            templateUrl: "app/eval/quizGallery.html",
            controller: "QuizGalleryCtrl"
        })
        .when("/Quizzes/form", {
            templateUrl: "app/eval/quizForm.html",
            controller: "QuizFormCtrl"
        })
        .when("/Quizzes/:quizIndex", {
            templateUrl: "app/eval/quizView.html",
            controller: "QuizViewCtrl"
        })
        .when("/ProgressTeacher", {
            templateUrl: "app/eval/answerGallery.html",
            controller: "AnswerGalleryCtrl"
        })
        .when("/ProgressPupil", {
            templateUrl: "app/eval/answerView.html",
            controller: "AnswerViewCtrl"
        })
        .when("/login", {
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })

});
