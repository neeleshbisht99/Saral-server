const services = require('../services');

exports.sendMessage = async (req, res, next) => {
  try {
    console.log(req.body);
    const doc = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    };
    await services.dbServices.dbAddDocument('UserMessages', doc);
    return res.status(201).send('Message received successfully!');
  } catch (err) {
    console.log('inside send-message error');
    return next({
      status: 405,
      message: err.message,
    });
  }
};
