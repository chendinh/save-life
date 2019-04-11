const models = {}
const mongoose = require('mongoose');
const fs = require('fs')

const normalizedPath = require("path").join(__dirname, "schema");

fs.readdirSync(normalizedPath).forEach(function(file) {
    const model = require("./schema/" + file);

    models[model.modelName] = model
});

module.exports = models;