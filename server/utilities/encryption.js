var crypto = require('crypto');



exports.createSalt = function createSalt() {
    return crypto.randomBytes(128).toString('base64');
};

exports.hashPwd = function hashPwd(salt, pwd) {
    var hmac = crypto.createHmac('sha256', salt);
    return hmac.update(pwd).digest('hex');
};

exports.getToken = function(){
    return crypto.randomBytes(48).toString('hex');
}
