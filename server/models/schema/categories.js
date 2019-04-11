const {STATUS} = require('../../config/const').USER;
const connections = require('../../config/mongodb').master;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categories = {
  name: {type: String, required: true},
  status: {type: String, default: STATUS.ACTIVE},
};

const categoriesSchema = new Schema(categories, {timestamps: true });

const categoriesModel = connections.model('Categories', categoriesSchema);

module.exports = categoriesModel;