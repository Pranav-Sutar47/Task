const mongoose = require('mongoose');
const { DB } = require('../Config/DBConnection');

const Book = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    authorName: {
        type: String,
        trim: true
    },
    year : {
        type:String,
        trim:true
    },
    category : {
        type : String,
        trim : true
    }
});

const BookModel = DB.model('Books',Book);

module.exports = BookModel;