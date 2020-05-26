const db = require('../models');

exports.dbAddDocument = async (dbCollection, dbDocument) => {
  try {
    const data = await db[dbCollection].create(dbDocument);
    await data.save();
  } catch (err) {
    return next({
      status: 503,
      message: err.message,
    });
  }
};
