const connections = require('../../config/mongodb').master;
const {STATUS} = require('../../config/const').USER;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projects = {
  title: {type: String, required: true},
  about: {type: String},
  status: {type: String, default: STATUS.ACTIVE},
  personResponsible: {
    firstName: {type: String},
    lastName: {type: String},
    birthday: {type: Date},
    phone:{type: String},
  },
  donationsCount: {type: Number, default: 0},
  amount:{type: Number},
  donateAmount:{type: Number, default: 0},
  process:{type: Number, default: 0},
  percent:{type: Number},
  minPercentSell:{type: Number},
  commentsCount:{type: Number},
  images:[{type: String}],
  countryId:{type: Schema.Types.ObjectId, ref: 'countries'},
  userId:{type: Schema.Types.ObjectId, ref: 'users'},
  categoryId:{type: Schema.Types.ObjectId, ref: 'categories'}
};

const projectsSchema = new Schema(projects, {timestamps: true });

const projectsModel = connections.model('Projects', projectsSchema);

module.exports = projectsModel;