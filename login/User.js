"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.toString = function () {
        return "User {'username':" + this.username + " 'password':" + this.password + " 'clientType':" + this.clientType + " }";
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map