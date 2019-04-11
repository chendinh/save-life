const CountriesHandle = require('express').Router();
const CountriesController = require('../../controllers/countries');

CountriesHandle.get('/', CountriesController.getAll);
CountriesHandle.post('/', CountriesController.create);
CountriesHandle.put('/:_id', CountriesController.update);

module['exports'] = CountriesHandle;