const { Schema, model } = require('mongoose');


module.exports.Rooms = model('Rooms', Schema({
    title: {
        type: String,
        required: true
    },
    desc: String,
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    type: {
        type: String,
        enum: ["room", "villa", "suit"],
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
}, {timestamps: true }) )