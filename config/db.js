const mongoose = require('mongoose');

let db;

const connectWithDb = () => {
    if (db) return db;

    return mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`DB Got Connected`);
        db = mongoose.connection;
        return db;
    })
    .catch(error => {
        console.log(`Db Connection Issues`);
        console.log(error);
        process.exit(1);
    });
};

module.exports = { connectWithDb };