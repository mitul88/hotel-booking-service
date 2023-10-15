const { Schema, model } = require('mongoose');

const facilities = Schema({
    breakfast: Boolean,
    gymnesium: Boolean,
    parking: Boolean,
    restaurant: Boolean,
    swimming_pool: Boolean,
    wifi: Boolean,
},{ _id : false })

module.exports.Hotel = model('Hotel', Schema({
    title: {
        type: String,
        required: true
    },
    locationId: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    description: String,
    facilities: facilities,
    photos: {
        type: [String]
    }
}, {timestamps: true }) )