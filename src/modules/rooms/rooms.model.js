const { Schema, model } = require('mongoose');

const facilities = Schema({
    breakfast: Boolean,
    gymnesium: Boolean,
    parking: Boolean,
    restaurant: Boolean,
    swimming_pool: Boolean,
    wifi: Boolean,
},{ _id : false })

module.exports.Rooms = model('Rooms', Schema({
    title: String,
    description: String,
    facilities: facilities,
    cost: {
        type: Number
    }
}, {timestamps: true }) )