const NotificationHandle = require('express').Router();
const NotificationController = require('../../controllers/notifications');

NotificationHandle.get('/', NotificationController.getNotificationsOfUser);
NotificationHandle.put('/:_id', NotificationController.update);

module['exports'] = NotificationHandle;
