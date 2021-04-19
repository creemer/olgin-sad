const express = require('express');
const cors = require('cors');

const flowerRoutes = require('./routes/flowers.route');
const mailRoutes = require('./routes/mail.route');

const app = express();

app.use(cors());
app.use('/flowers', flowerRoutes);
app.use('/mail', mailRoutes);


module.exports = app;
