const { Location } = require("./location.model")

module.exports.create = async (req, res) => {
    const location = new Location(req.body);
    try {
        await location.save();
        return res.status(201).send({message: "location created"})
    } catch(error) {
        return res.status(500).send({message: "Internal error, lcoation creation failed", err: error.message})
    }
}