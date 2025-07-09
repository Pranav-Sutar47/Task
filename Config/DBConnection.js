const mongoose = require('mongoose');

const URL = String(process.env.DB_URL);

const DB = mongoose.createConnection(URL);

DB.on('connected',()=>{
    console.log('DB connected');
});

DB.on('error',(err)=>{
    console.log('User DB error:',err);
});

module.exports = {
    DB
};