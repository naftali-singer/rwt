// Shared User Constructor
RWTApp.factory("User", function(){
    function User(plainObject) {
        this.userId = plainObject.userId;
        this.userPswd = plainObject.userPswd;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.role = plainObject.role;
        this.teacherId = plainObject.teacherId;
        this.quizId = plainObject.quizId;
    };

    return User;
});

// Service that manges the active user
RWTApp.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    var isTeacher = function() {
        if (user && user.role === "teacher") {
            return true;
         } else {
             return false;
         }
    };

    var isPupil = function() {
        if (user && user.role === "pupil") {
            return true;
         } else {
             return false;
         }
    };


    return {
        isLoggedIn : isLoggedIn,
        login : login,
        logout : logout,
        get : get,
        isTeacher : isTeacher,
        isPupil : isPupil
    };
});