const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test = new Schema({

    count_download: {
        type: Number,
        defalut: 0
    }
    
},{ timestamps: true });

module.exports = {Counter: mongoose.model('test',test)};