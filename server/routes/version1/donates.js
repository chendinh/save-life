const DonatesHandle = require('express').Router();
const DonateController = require('../../controllers/donates');

DonatesHandle.get('/:projectId', DonateController.getByProjectId);
DonatesHandle.post('/', DonateController.create);

module['exports'] = DonatesHandle;