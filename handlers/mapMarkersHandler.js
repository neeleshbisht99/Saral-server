const db = require('../models');

exports.getMapMarkers = async (req, res, next) => {
  try {
    const { topNorthEast, bottomSouthWest } = req.query;
    var ne = JSON.parse(topNorthEast);
    var sw = JSON.parse(bottomSouthWest);
    const markerPositions = await db.Prime.find({
      lng: { $gte: sw.longitude, $lte: ne.longitude },
      lat: { $gte: sw.latitude, $lte: ne.latitude },
    });
    return res.send(markerPositions);
  } catch (err) {
    console.log('okk');
    return next({
      status: 400,
      message: err.message,
    });
  }
};
