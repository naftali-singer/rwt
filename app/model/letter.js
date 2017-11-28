// Shared Letter Constructor
RWTApp.factory("Letter", function(){
    function Letter(plainObject) {
        this.symbol = plainObject.symbol;
        this.nameUrl = plainObject.nameUrl;
    };

    return Letter;
});



RWTApp.factory("letters", function(Letter) {
    var letterArr = [];

    var add = function(letter) {
        letterArr.push(letter);
    }

    var update = function(index, letter) {
        letterArr[index] = letter;
    }

    var remove = function(index) {
        letterArr.splice(index, 1);
    }

    var load = function(letterPlainObjectArr) {
        for (var i = 0; i < letterPlainObjectArr.length; i++) {
            letterArr.push(new Letter(letterPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return letterArr;
    }

    var get = function(index) {
        return letterArr[index];
    }

    var removeAll = function() {
        letterArr = [];
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