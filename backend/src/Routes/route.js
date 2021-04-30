'use stric'
const express = require('express');
const router = express.Router();
const charCounter = require('../Controllers/charCounter');
const episodeLocation = require('../Controllers/episodeLocations');


//charCounter controller
router.get('/getLocations', charCounter.controller.getCountLocations);
router.get('/getCharacters', charCounter.controller.getCountCharacter);
router.get('/getEpisodes', charCounter.controller.getCountEpisode);

//episodeLocation controller
router.get('/episodeLocation', episodeLocation.eLocation);



module.exports = router;