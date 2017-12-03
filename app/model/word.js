// Shared Word Constructor
RWTApp.factory("Word", function(){
    function Word(plainObject) {
        this.symbol = plainObject.symbol;
        this.soundUrl = plainObject.soundUrl;
        this.imageUrl = plainObject.imageUrl;
        this.sylls = plainObject.sylls;
    };

    return Word;
});



RWTApp.factory("words", function(Word) {
    var wordArr = [];

    var add = function(word) {
        wordArr.push(word);
    }

    var update = function(index, word) {
        wordArr[index] = word;
    }

    var remove = function(index) {
        wordArr.splice(index, 1);
    }

    var load = function(wordPlainObjectArr) {
        for (var i = 0; i < wordPlainObjectArr.length; i++) {
            wordArr.push(new Word(wordPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return wordArr;
    }

    var get = function(index) {
        return wordArr[index];
    }

    var removeAll = function() {
        wordArr = [];
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