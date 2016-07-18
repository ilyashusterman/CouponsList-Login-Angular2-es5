"use strict";
function isLoggedin(clientType) {
    var theToken = JSON.parse(((localStorage.getItem('token'))));
    console.log('client ' + (localStorage.getItem('token')) + ' token type' + theToken);
    return !!localStorage.getItem('token') && (theToken.clientType == clientType);
}
exports.isLoggedin = isLoggedin;
function getTokenFromBrowser() {
    var theToken = JSON.parse(((localStorage.getItem('token'))));
    return theToken;
}
exports.getTokenFromBrowser = getTokenFromBrowser;
//# sourceMappingURL=isLoggedIn.service.js.map