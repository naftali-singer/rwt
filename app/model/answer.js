// Shared Answer Constructor
RWTApp.factory("Answer", function(){
    function Answer(plainObject) {
        this.userId = plainObject.userId;
        this.quizId = plainObject.quizId;
        this.ordinal = plainObject.ordinal;
        this.score = plainObject.score;
        this.pupilAns = plainObject.pupilAns;
    };

    return Answer;
});


RWTApp.factory("answers", function(Answer) {
    var answerArr = [];

    var add = function(answer) {
        answerArr.push(answer);
    }

    var update = function(index, answer) {
        answerArr[index] = answer;
    }

    var remove = function(index) {
        answerArr.splice(index, 1);
    }

    var load = function(answerPlainObjectArr) {
        for (var i = 0; i < answerPlainObjectArr.length; i++) {
            answerArr.push(new Answer(answerPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return answerArr;
    }

    var get = function(index) {
        return answerArr[index];
    }

    var removeAll = function() {
        answerArr = [];
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