var userInfoDao = require("./../dao/userInfoDao");

var authController = {
    authorizeByCreds: function (req, res, next) {
        var email = req.body.email,
            password = req.body.password,
            rememberMe = req.body.rememberMe; // no need to worry about it right now

        var userInfo = userInfoDao.findByEmail(email);

        if (!userInfo || userInfo.password != password) {
          res.status(401).send({message: 'Wrong user email or password.'});
        } else {
          res.json(userInfo)
        }
    },
    signUpByCreds: function (req, res, next) {
        var email = req.body.email,
            password = req.body.password;

        var existingUser = userInfoDao.findByEmail(email);

        if (existingUser) {
            res.status(500).send({message: 'User with this email is already exists.'});
        } else {
            var newUserInfo = userInfoDao.addUser(email, email, password);
            res.json(newUserInfo)
        }
    }
};

module.exports = authController;
