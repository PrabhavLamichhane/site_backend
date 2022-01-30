const express = require('express');
const validate = require('express-validation');

const paramValidation = require('../../config/param-validation');
const authCheck = require('../middleware/auth_check');

const storage = require('../helpers/storage');

const blogCtrl = require('./blog.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    /** POST /api/blog - Create new blog */
    // validate((paramValidation.blog)), 
    .post(authCheck, storage, blogCtrl.create);


module.exports = router;