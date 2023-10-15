const authRouter = require('../modules/auth/auth.routes')
const hotelRouter = require('../modules/hotel/hotel.routes')
const locationRouter = require('../modules/location/location.routes')

module.exports = (app) => {
    app.use('/api/auth', authRouter)
    app.use('/api/hotel', hotelRouter)
    app.use('/api/location', locationRouter)
}