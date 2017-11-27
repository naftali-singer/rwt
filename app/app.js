var RWTApp = angular.module("RWTApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

RWTApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/words", {
            templateUrl: "app/thesaurus/wordGallery.html",
            controller: "WordGalleryCtrl"
        })
        .when("/syllables", {
//            templateUrl: "app/recipe/recipeGallery.html",
//            controller: "RecipeGalleryCtrl"
        })
        .when("/letters", {
//            templateUrl: "app/recipe/recipeGallery.html",
//            controller: "RecipeGalleryCtrl"
        })
        .when("/quizzes", {
//            templateUrl: "app/recipe/recipeGallery.html",
//            controller: "RecipeGalleryCtrl"
        })
        .when("/progress", {
//            templateUrl: "app/recipe/recipeGallery.html",
//            controller: "RecipeGalleryCtrl"
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