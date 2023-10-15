const router = require('express').Router();
const {create} = require('./rooms.controller')

router.route('/create')
    .post(create);

module.exports = router;