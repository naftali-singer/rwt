// Shared Answersheet Constructor
RWTApp.factory("Answersheet", function(){
    function Answersheet(plainObject) {
        this.userId = plainObject.userId;
        this.quizId = plainObject.quizId;
        this.ordinal = plainObject.ordinal;
        this.score = plainObject.score;
        this.answer = plainObject.answer;
    };

    return Answersheet;
});



RWTApp.factory("answersheets", function(Answersheet) {
    var answersheetArr = [];

    var add = function(answersheet) {
        answersheetArr.push(answersheet);
    }

    var update = function(index, answersheet) {
        answersheetArr[index] = answersheet;
    }

    var remove = function(index) {
        answersheetArr.splice(index, 1);
    }

    var load = function(answersheetPlainObjectArr) {
        for (var i = 0; i < answersheetPlainObjectArr.length; i++) {
            answersheetArr.push(new Answersheet(answersheetPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return answersheetArr;
    }

    var get = function(index) {
        return answersheetArr[index];
    }

    var removeAll = function() {
        answersheetArr = [];
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