const CommentHandle = require('express').Router();
const CommentController = require('../../controllers/comments');

CommentHandle.get('/', CommentController.getCmByProjectId);
CommentHandle.post('/', CommentController.create);
CommentHandle.put('/:_id', CommentController.update);

module['exports'] = CommentHandle;
