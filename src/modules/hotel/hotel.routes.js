const router = require('express').Router();
const {create} = require('./hotel.controller')

router.route('/create')
    .post(create);

module.exports = router;