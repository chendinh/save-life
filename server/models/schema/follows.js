const {STATUS} = require('../../config/const').USER;
const {STATUS_TYPE} = require('../../config/const').USER;
const connections = require('../../config/mongodb').master;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const follows = {
  user: {type: Schema.Types.ObjectId, ref: 'Users', required: true},
  project: {type: Schema.Types.ObjectId, ref: 'Projects', required: true},
  status: {type: String, default: STATUS.ACTIVE},
};

const followsSchema = new Schema(follows, {timestamps: true });

const followsModel = connections.model('Follows', followsSchema);

module.exports = followsModel;