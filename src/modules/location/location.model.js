const { Schema, model } = require('mongoose');


module.exports.Location = model('Location', Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    desc: String,
    photo: {
        type: String
    }
}, {timestamps: true }) )