const express = require('express');
const validate = require('express-validation');
const expressJwt = require('express-jwt');
const authCtrl = require('./auth.controller');

const paramValidation = require('../../config/param-validation');
const config = require('../../config/config');

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login')
    .post(validate(paramValidation.login), authCtrl.login);

/** POST /api/auth/signup - Returns token if user is successfully registered */
router.route('/signup')
    .post(validate(paramValidation.signup), authCtrl.signUp);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.route('/random-number')
    .get(expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber);

module.exports = router;