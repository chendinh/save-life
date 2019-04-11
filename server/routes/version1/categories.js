const CategoriesHandle = require('express').Router();
const CategoriesController = require('../../controllers/categories');

CategoriesHandle.get('/', CategoriesController.getAll);
CategoriesHandle.post('/', CategoriesController.create);
CategoriesHandle.put('/:_id', CategoriesController.update);

module['exports'] = CategoriesHandle;
