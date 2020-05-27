module.exports = {
  ...require('./mapMarkersHandler'),
  ...require('./addLocationHandler'),
  ...require('./sendMessageHandler'),
};

module.exports.error = (err, req, res, next) => {
  console.log('inside handle error');
  return res.status(err.status || 500).json({
    sucess: false,
    error: {
      message: err.message || 'something went wrong.',
    },
  });
};
