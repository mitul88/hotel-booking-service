const { Schema, model } = require('mongoose');


module.exports.Rooms = model('Rooms', Schema({
    title: String,
    description: String,
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
}, {timestamps: true }) )