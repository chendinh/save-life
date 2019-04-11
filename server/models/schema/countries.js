const connections = require('../../config/mongodb').master;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countries = {
  name: {type: String, required: true},
  continents: {type: String},
};

const countriesSchema = new Schema(countries, {timestamps: true });

const countriesModel = connections.model('Countries', countriesSchema);

module.exports = countriesModel;