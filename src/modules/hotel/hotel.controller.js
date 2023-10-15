const { Hotel } = require("./hotel.model")

module.exports.create = async(req, res) => {
    const {
        title,
        locationId,
        desc,
        facilities
    } = req.body
    
    const hotel = new Hotel({title, locationId});

    try {
        hotel.description = desc 
        hotel.facilities = facilities
        await hotel.save();
        return res.status(201).send({message: "hotel created"})
    } catch( error ) {
        return res.status(500).send({
            message: "internal error, hotel creation failed",
            err: error.message
        })
    } 
}