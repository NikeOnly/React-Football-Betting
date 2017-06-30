var router = require('express').Router(),
    pause = require('connect-pause'),
    authController = require('./authController'),
    offersController = require('./offersController')
    inputController = require('./inputController');


// Everything about user login....
router.post('/login/internal', pause(1000), authController.authorizeByCreds);
router.post('/sign-up/internal', pause(1000), authController.signUpByCreds);

// Everything for offer-based info
router.get('/offers', pause(1000), offersController.getOffers);

router.get('/input-info', pause(1000), inputController.getInputInfo);

module.exports = router;
