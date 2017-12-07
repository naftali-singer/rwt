RWTApp.controller("WordGalleryCtrl", function ($scope, $http, $location, activeUser, Word, words) {
    
        // Making sure that we load only once
        if (words.getAll().length === 0) {
            $scope.wordArr = [];
            $http.get("app/data/words.JSON").then(function(response) {
//                alert(JSON.stringify(response));
                words.load(response.data);
                $scope.wordArr = words.getAll();
            });
        } else {
            $scope.wordArr = words.getAll();
        }
    
        $scope.playWord = function (soundUrl) {
            var audio = new Audio(soundUrl);
            audio.play();  
        }

        $scope.editSylls = function (sylls) {
            var editedSylls = "";
            for (var i = 0; i < sylls.length; i++) {
                editedSylls = editedSylls + " " + sylls[i];
            }
            return editedSylls;
        }

});
    