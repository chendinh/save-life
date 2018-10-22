const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

const mongodb_master_connection = mongoose.createConnection(CONFIG.mongodb_url, { 
    useNewUrlParser: true
});

mongodb_master_connection.on('error', function (err) {
    console.error('MongoDB event error: ' + err);
});

module.exports = {
    master: mongodb_master_connection
};