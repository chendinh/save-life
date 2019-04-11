const {STATUS} = require('../../config/const').USER;
const connections = require('../../config/mongodb').master;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donates = {
  userId: {type: Schema.Types.ObjectId, ref: 'users', required: true},
  projectId: {type: Schema.Types.ObjectId, ref: 'projects', required: true},
  amount: {type: Number, required: true},
  note: {type: String},
  status: {type: String, default: STATUS.ACTIVE},
  percent: {type: Number, required: true},
};

const donatesSchema = new Schema(donates, {timestamps: true });

const donatesModel = connections.model('Donates', donatesSchema);

module.exports = donatesModel;