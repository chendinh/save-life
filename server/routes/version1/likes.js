const LikesHandle = require('express').Router();
const LikesController = require('../../controllers/likes');

LikesHandle.get('/', LikesController.getLikesByProjectId);
LikesHandle.post('/', LikesController.create);
LikesHandle.put('/:_id', LikesController.update);

module['exports'] = LikesHandle;
