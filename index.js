require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');
const handle = require('./handlers');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/mapMarkers', routes.mapMarkers);
app.use('/api/addLocation', routes.addLocation);
app.use('/api/sendMessage', routes.sendMessage);

app.use('/', (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(handle.error);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
