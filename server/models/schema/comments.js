const {STATUS} = require('../../config/const').USER;
const {STATUS_TYPE} = require('../../config/const').USER;
const connections = require('../../config/mongodb').master;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comments = {
  user: {type: Schema.Types.ObjectId, ref: 'Users', required: true},
  project: {type: Schema.Types.ObjectId, ref: 'Projects', required: true},
  parentId: {type: Schema.Types.ObjectId, ref: 'Comments'},
  status: {type: String, default: STATUS.ACTIVE},
  content: {type: String,},
  type: {type: String, default: STATUS_TYPE.COMMENT},
};

const commentsSchema = new Schema(comments, {timestamps: true });

const commentsModel = connections.model('Comments', commentsSchema);

module.exports = commentsModel;