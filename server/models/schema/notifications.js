const {STATUS} = require('../../config/const').USER;
const {STATUS_TYPE} = require('../../config/const').USER;
const connections = require('../../config/mongodb').master;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notifications = {
  user: {type: Schema.Types.ObjectId, ref: 'Users', required: true},
  project: {type: Schema.Types.ObjectId, ref: 'Projects', required: true},
  status: {type: String, default: STATUS.ACTIVE},
  title: {type: String},
  is_read: {type: Boolean, default: false}
};

const notificationsSchema = new Schema(notifications, {timestamps: true });

const notificationsModel = connections.model('Notifications', notificationsSchema);

module.exports = notificationsModel;