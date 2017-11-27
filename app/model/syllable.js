// Shared Syllable Constructor
RWTApp.factory("Syllable", function(){
    function Syllable(plainObject) {
        this.symbol = plainObject.symbol;
        this.soundUrl = plainObject.soundUrl;
    };

    return Syllable;
});



RWTApp.factory("syllables", function(Syllable) {
    var syllableArr = [];

    var add = function(syllable) {
        syllableArr.push(syllable);
    }

    var update = function(index, syllable) {
        syllableArr[index] = syllable;
    }

    var remove = function(index) {
        syllableArr.splice(index, 1);
    }

    var load = function(syllablePlainObjectArr) {
        for (var i = 0; i < syllablePlainObjectArr.length; i++) {
            syllableArr.push(new Syllable(syllablePlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return syllableArr;
    }

    var get = function(index) {
        return syllableArr[index];
    }

    var removeAll = function() {
        syllableArr = [];
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