var RWTApp = angular.module("RWTApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

RWTApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/Words", {
            templateUrl: "app/vocab/wordGallery.html",
            controller: "WordGalleryCtrl"
        })
        .when("/Syllables", {
            templateUrl: "app/vocab/syllableGallery.html",
            controller: "SyllableGalleryCtrl"
        })
        .when("/Letters", {
            templateUrl: "app/vocab/letterGallery.html",
            controller: "LetterGalleryCtrl"
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
        .when("/ExerWLbyS", {
            templateUrl: "app/train/exerWLbyS.html",
            controller: "ExerWLbySCtrl"
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
        .when("/Progress", {
            templateUrl: "app/eval/answerGallery.html",
            controller: "AnswerGalleryCtrl"
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

});






// TODO: Delete this TESTINGGGGGGGGGG
//RWTApp.controller("TestCtrl", function ($scope, User, activeUser, Recipe, recipes) {
RWTApp.controller("TestCtrl", function ($scope, User, activeUser) {
    var plainUser = {
        "email": "nir@nir.com",
        "password": "nir123",
        "firstName": "Nir",
        "lastName": "Channes",
        "data": "nir-recipes.json"
    }

    var user = new User(plainUser);

    console.log(JSON.stringify(user));
    console.log(activeUser.isLoggedIn());
    activeUser.login(user);
    console.log(JSON.stringify(activeUser.get()));
    console.log(activeUser.isLoggedIn());
    activeUser.logout();
    console.log(activeUser.isLoggedIn());

/*
    var plainRecipe = {
        "name": "Shakshuka",
        "description": "An amazing egg dish",
        "duration": 40,
        "ingrediants": "Eggs, Tomattos, Oil",
        "steps": "Heat the pan, put the eggs",
        "imageUrl": "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.37.1080.1080/17438558_192469144582319_1152478392830918656_n.jpg?ig_cache_key=MTQ3NTg0MDMxNjE4ODA0ODY4NA%3D%3D.2.c"
    }

    var recipe = new Recipe(plainRecipe);
    console.log(JSON.stringify(recipe));

    recipes.add(plainRecipe);
    recipes.add(plainRecipe);
    console.log(JSON.stringify(recipes.getAll()));
    recipes.removeAll();
    console.log(JSON.stringify(recipes.getAll()));
*/
});