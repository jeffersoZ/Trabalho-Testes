const express = require('express');
const financeiroRoutes = require('./routes/financeiro');

const app = express();
app.use(express.json());

app.use('/financeiro', financeiroRoutes);

module.exports = app;
