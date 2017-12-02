// Shared Pupil Constructor
RWTApp.factory("Pupil", function(){
    function Pupil(plainObject) {
        this.userId = plainObject.userId;
        this.userPswd = plainObject.userPswd;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.quizId = plainObject.quizId;
    };

    return Pupil;
});

// Service that manges the pupils of a teacher
RWTApp.factory("pupils", function(Pupil){
    var pupilArr = [];

    var add = function(pupil) {
        pupilArr.push(pupil);
    }

    var update = function(index, pupil) {
        pupilArr[index] = pupil;
    }

    var remove = function(index) {
        pupilArr.splice(index, 1);
    }

    var load = function(pupilPlainObjectArr) {
        for (var i = 0; i < pupilPlainObjectArr.length; i++) {
            pupilArr.push(new Pupil(pupilPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return pupilArr;
    }

    var get = function(index) {
        return pupilArr[index];
    }

    var removeAll = function() {
        pupilArr = [];
    }

    var getByTeacher = function(userId) {
        var pupilsOfTeacher = [];
        for (var i = 0; i < pupilArr.length; i++) {
            if (pupilArr[i].teacherId === userId) {
                pupilOfTeacher.push(pupilArr[i]);
            }
        }
        return pupilsOfTeacher;
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        getByTeacher : getByTeacher
    };
});