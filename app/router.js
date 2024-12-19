const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');


router.get('/', mainController.homePage);
router.get('/activity/:id', mainController.activityDetails);
router.get('/search', mainController.searchActivities);



module.exports = router;