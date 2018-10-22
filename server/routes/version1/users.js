const UserHandler = require('express').Router();
const UserController = require('../../controllers/users');

UserHandler.post('/register', UserController.create);
UserHandler.post('/signIn', UserController.signIn);
UserHandler.post('/profile', UserController.profile);

module['exports'] = UserHandler;