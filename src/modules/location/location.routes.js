const router = require('express').Router();
const {create} = require('./location.controller')

router.route('/create')
    .post(create);

module.exports = router;