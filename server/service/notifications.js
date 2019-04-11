const {Notifications} = require('../models');
const {Donates} = require('../models');
const {Projects} = require('../models');
const {Users} = require('../models');
const {STATUS} = require('../config/const').USER;

const getNotificationsUser = async function (user, limit, skip) {
  try {
    
    const notifications = await Notifications.find({user: user._id}).limit(limit).skip(skip);
    
    return notifications;
    
  } catch (error) {
    return HandleError(error);
    
  }
};

const create = async function (dataDonate, userDonate) {
  let _this = this;
  try {
    
    const donates = await Donates.find({projectId: dataDonate.projectId});
    
    const project = await  Projects.findOne({_id: dataDonate.projectId}).lean(true);
    if (donates && donates.length && project && project._id) {
      let newDonates = donates.filter(us => us.userId != userDonate._id);
      await _this.handleNotificationToUserDonate(newDonates, project, userDonate);
    }else {
      await _this.notificationToUserProject(userDonate, project);
    }
    
    return;
    
  } catch (error) {
    return HandleError(error);
    
  }
};

const update = async function (_id, is_read) {
  try {
    const notification = await Notifications.findOne({_id: _id});
    
    if (!notification) {
      return HandleError(ErrorCode.NOTIFICATION_NO_EXITS);
    }
    
    notification.is_read = is_read;
    
    const notificationSaved = await notification.save();
    
    return notificationSaved;
    
  } catch (error) {
    return HandleError(error);
    
  }
};


const handleNotificationToUserDonate = async function (donates, project, userDonate) {
  let _this = this;
  try {
    
    for (let i = 0; i < donates.length; i++) {
      let donate = donates[i];
      let notification = await Notifications.findOne({user: donate.userId, project: donate.projectId});
      if (notification && notification._id) {
        let now = Date.now();
        notification.updatedAt = now;
        await notification.save();
      } else {
        await _this.notificationToUserDonate(donate, userDonate, project);
      }
    }
    
    return;
  } catch (error) {
    return HandleError(error);
  }
};

const notificationToUserDonate = async function (dataDonate, userDonate, project) {
  try {
    let dataNotifi = {
      'user': dataDonate.userId,
      'project': dataDonate.projectId,
      'title': userDonate.username + ' have donated project ' + project.title
    };
    let notifications = new Notifications(dataNotifi);
    let result = await notifications.save();
    
    return result;
  }catch (error) {
    return HandleError(error);
  }
};

const notificationToUserProject = async function (userDonate, project) {
  try {
    let result = {};
    let notification = await Notifications.findOne({user: project.userId, project: project._id});
    if (notification && notification._id) {
      let now = Date.now();
      notification.updatedAt = now;
      result = await notification.save();
    }else {
      let dataNotifi = {
        'user': project.userId,
        'project': project._id,
        'title': userDonate.username + ' have donated project ' + project.title
      };
      let notifications = new Notifications(dataNotifi);
      result = await notifications.save();
    }
    
    return result;
  }catch (error) {
    return HandleError(error);
  }
};

const  countData = async function(filter) {
  try {
    const count = Notifications.countDocuments(filter);
    
    return count;
    
  }catch (error) {
    return HandleError(error);
  }
};

module.exports = {
  getNotificationsUser,
  create,
  update,
  handleNotificationToUserDonate,
  notificationToUserDonate,
  notificationToUserProject,
  countData
};
