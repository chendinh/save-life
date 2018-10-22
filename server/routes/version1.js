const express = require('express');
const router = express.Router();

router.use('/users', require('./version1/users'));

module.exports = router
