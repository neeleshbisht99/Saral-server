const services = require('../services');

exports.addLocation = async (req, res, next) => {
  try {
    console.log(req.body);
    var doc = {
      lat: req.body.latitude,
      lng: req.body.longitude,
      country: req.body.country,
    };
    await services.dbServices.dbAddDocument('Prime', doc);
    return res.status(201).send('Location added successfully!');
  } catch (err) {
    console.log('inside add-location error');
    return next({
      status: 405,
      message: err.message,
    });
  }
};
