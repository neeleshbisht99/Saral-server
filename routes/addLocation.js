const router = require('express').Router();
const handle = require('../handlers');

router.route('/').post(handle.addLocation);
module.exports = router;
