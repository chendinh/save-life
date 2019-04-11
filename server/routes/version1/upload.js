const UploadHandle = require('express').Router();
const UploadController = require('../../controllers/upload');

UploadHandle.post('/', UploadController.upload);

module['exports'] = UploadHandle;
