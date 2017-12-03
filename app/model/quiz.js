// Shared Quiz Constructor
RWTApp.factory("Quiz", function(){
    function Quiz(plainObject) {
        this.quizId = plainObject.quizId;
        this.title = plainObject.title;
        this.skill = plainObject.skill;
        this.category = plainObject.category;
        this.means = plainObject.means;
        this.questn = plainObject.questn;
    };

    return Quiz;
});


RWTApp.factory("quizzes", function(Quiz) {
    var quizArr = [];

    var add = function(quiz) {
        quizArr.push(quiz);
    }

    var update = function(index, quiz) {
        quizArr[index] = quiz;
    }

    var remove = function(index) {
        quizArr.splice(index, 1);
    }

    var load = function(quizPlainObjectArr) {
        for (var i = 0; i < quizPlainObjectArr.length; i++) {
            quizArr.push(new Quiz(quizPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return quizArr;
    }

    var get = function(index) {
        return quizArr[index];
    }

    var removeAll = function() {
        quizArr = [];
    }

    var getQuizByQuizId = function(quizId) {
        for (var i = 0; i < quizArr.length; i++) {
            if (quizArr[i].quizId === quizId) {
                return quizArr[i];
            }
        }
        return null;
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        getQuizByQuizId : getQuizByQuizId
    }
})