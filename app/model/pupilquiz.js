// Shared PupilQuiz Constructor
RWTApp.factory("PupilQuiz", function(){
    function PupilQuiz(plainObject) {
        this.questnNo = plainObject.questnNo;
        this.symbol = plainObject.symbol;
        this.soundUrl = plainObject.soundUrl;
        this.imageUrl = plainObject.imageUrl;
        this.pupilAns = plainObject.pupilAns;
    };

    return PupilQuiz;
});


RWTApp.factory("pupilQuizzes", function(PupilQuiz) {
    var pupilQuizArr = [];

    var add = function(pupilQuiz) {
        pupilQuizArr.push(pupilQuiz);
    }

    var update = function(index, pupilQuiz) {
        pupilQuizArr[index] = pupilQuiz;
    }

    var remove = function(index) {
        pupilQuizArr.splice(index, 1);
    }

    var load = function(pupilQuizPlainObjectArr) {
        for (var i = 0; i < pupilQuizPlainObjectArr.length; i++) {
            pupilQuizArr.push(new PupilQuiz(pupilQuizPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return pupilQuizArr;
    }

    var get = function(index) {
        return pupilQuizArr[index];
    }

    var removeAll = function() {
        pupilQuizArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
})