const {STATUS} = require('../../config/const').USER;
const {STATUS_TYPE} = require('../../config/const').USER;
const connections = require('../../config/mongodb').master;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likes = {
  user: {type: Schema.Types.ObjectId, ref: 'Users', required: true},
  project: {type: Schema.Types.ObjectId, ref: 'Projects', required: true},
  status: {type: String, default: STATUS.ACTIVE},
};

const likesSchema = new Schema(likes, {timestamps: true });

const likesModel = connections.model('Likes', likesSchema);

module.exports = likesModel;