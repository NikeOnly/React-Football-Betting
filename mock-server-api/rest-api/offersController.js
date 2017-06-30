var offerInfoDao = require("./../dao/offerInfoDao");

var offersController = {
    getOffers: function (req, res, next) {
        res.json(offerInfoDao.getAll());
    }
};

module.exports = offersController;
