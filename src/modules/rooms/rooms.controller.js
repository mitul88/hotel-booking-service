const { Rooms } = require("./rooms.model");

module.exports.create = async (req, res) => {
    const {
        title,
        desc,
        hotelId,
        cost,
        type
    } = req.body;

    if (!title || !hotelId || !cost || !type) return res.status(422).send({message: "title, hotel id and cost required"})

    const room = new Rooms(req.body)
    try {
        await room.save();
        return res.status(201).send({message: "Rooms created"})
    } catch(error) {
        return res.status(500).send({message: "Internal error, room creation failed"})
    }
}