const FollowHandle = require('express').Router();
const FollowController = require('../../controllers/follows');

FollowHandle.get('/', FollowController.getFollowsByProjectId);
FollowHandle.get('/projects', FollowController.getProjectFollowedByUser);
FollowHandle.post('/', FollowController.create);
FollowHandle.put('/:_id', FollowController.update);

module['exports'] = FollowHandle;
