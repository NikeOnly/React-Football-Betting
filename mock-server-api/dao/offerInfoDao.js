var mockedOfferList = require('./../mocked-data').offerList;

var offerInfoDao = {
    getAll: function () {
        return mockedOfferList;
    },
    _findFirstByFiled(field, value) {
        for (var i = 0; i < mockedOfferList.length; i++) {
            var currentUser = mockedOfferList[i];
            if (currentUser[field] == value) {
                return currentUser;
            }
        }
        return null;
    }
};


module.exports = offerInfoDao;