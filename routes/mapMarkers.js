const router = require('express').Router();
const handle = require('../handlers');

router.route('/').get(handle.getMapMarkers);
module.exports = router;
