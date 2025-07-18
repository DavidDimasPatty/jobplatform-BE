const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

module.exports = app;