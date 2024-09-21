const express = require('express');
const homeController = require('../controllers/homeControllers'); 

const router = express.Router();

const initWebRouters = (app) => {
    router.get('/', homeController.getMainHome);
    return app.use("/", router);
}

module.exports = initWebRouters;
