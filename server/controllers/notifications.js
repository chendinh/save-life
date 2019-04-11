const notificationsService = require('../service/notifications');
const {validateBoolean} = require('../helper/utils.js');

const getNotificationsOfUser = async function (req, res) {
  try {
    const user = req.user;
    const limit = req.query.limit ? parseInt(req.query.limit) : 20;
    const skip = req.query.skip ? parseInt(req.query.skip) : 0;
    let count = 0;
    
    if ((!user || !user._id)) {
      return ResponeError(req, res, null, ErrorCode.PERMISSION_DENIED);
    }
    count = await notificationsService.countData({user: user._id});
  
    const notifications = await notificationsService.getNotificationsUser(user, limit, skip);
    
    return ResponeSuccess(req, res, {notifications, total: count});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const update = async function (req, res) {
  try {
    const is_read = req.body.is_read;
    const notificationId = req.params._id ? req.params._id : '';
  
    if (!notificationId) {
      return ResponeError(req, res, null, ErrorCode.NOTIFICATION_ID_IS_REQUIRE);
    }
    
    if (!is_read || !validateBoolean(is_read)) {
      return ResponeError(req, res, null, ErrorCode.IS_READ_TYPE_BOOLEAN);
    }
    
    const notification = await notificationsService.update(notificationId, is_read);
    
    return ResponeSuccess(req, res, {notification});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  getNotificationsOfUser,
  update
};