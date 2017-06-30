var mockedUserInfoList = require('./../mocked-data').userInfoList;

var userInfoDao = {
    getAll: function () {
        return mockedUserInfoList;
    },
    findByEmail: function (email) {
        return this._findFirstByFiled('email', email);
    },
    _findFirstByFiled(field, value) {
        for (var i = 0; i < mockedUserInfoList.length; i++) {
            var currentUser = mockedUserInfoList[i];
            if (currentUser[field] == value) {
                return currentUser;
            }
        }
        return null;
    },
    addUser: function (name, email, password) {
        var newUser = {
            id: mockedUserInfoList.length,
            name: name,
            email: email,
            password: password
        };

        mockedUserInfoList.push(newUser);

        return newUser;
    }
};


module.exports = userInfoDao;