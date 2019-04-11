const express = require('express');
const router = express.Router();

router.use('/users', require('./version1/users'));
router.use('/categories', require('./version1/categories'));
router.use('/projects', require('./version1/projects'));
router.use('/countries', require('./version1/countries'));
router.use('/donates', require('./version1/donates'));
router.use('/comments', require('./version1/comments'));
router.use('/follows', require('./version1/follows'));
router.use('/likes', require('./version1/likes'));
router.use('/notifications', require('./version1/notifications'));
router.use('/upload', require('./version1/upload'));

module.exports = router;
