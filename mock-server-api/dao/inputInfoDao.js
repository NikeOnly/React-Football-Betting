var mockedAccountVerificationAddresses = require('./../mocked-data/inputInfo').accountVerificationAddresses;

var inputInfoDao = {
    getAll: function () {
        return mockedAccountVerificationAddresses;
    },
};


module.exports = inputInfoDao;
