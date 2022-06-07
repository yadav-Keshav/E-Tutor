const mongoose = require('mongoose');
const { DB_URL } = require('./config');

module.exports = () => {
    console.log(DB_URL);
    mongoose.connect(DB_URL)
        .then((db) => {
            console.log(`sucefully Connected: ${db.connection.host}`)
        })
}