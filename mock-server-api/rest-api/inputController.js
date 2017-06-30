var inputInfoDao = require("./../dao/inputInfoDao");

var inputController = {
    getInputInfo: function (req, res, next) {
        res.json(inputInfoDao.getAll());
    }
};

module.exports = inputController;
