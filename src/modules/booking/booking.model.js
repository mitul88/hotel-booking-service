const { Schema, model } = require('mongoose');

const paymentDetails = Schema({
    paymentMethod: String,
    total: Number,
},{ _id : false })

module.exports.Booking = model('Booking', Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: 'Rooms',
        required: true
    },
    checkIn: {
        type: Date,
    },
    checkOut: {
        type: Date,
    },
    paymentDetails: paymentDetails,
    cost: {
        type: Number,
        required: true
    }
}, {timestamps: true }) )