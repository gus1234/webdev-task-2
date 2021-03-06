'use strict';

module.exports.getApp = async function () {
    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const app = express();
    const { getMongo } = require('./mongo');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    let { client, maxSite } = await getMongo();
    require('./routes.js')(app, client.db('places').collection('places'), maxSite);

    return app;
};
