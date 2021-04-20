"use strict";
const microprofiler = require("microprofiler");
const charCounter = require('./src/Controllers/charCounter');
const episodeLocation = require('./src/Controllers/episodeLocations');

/**
 * To try a challenge, please comment the other one for a better answer in console
 */
const main = () => {
    //challenge1();
    challenge2();
}

const challenge1 = async () => {
    const start = microprofiler.start();
    const charLCount = await charCounter.getCountLocations();
    const charECount = await charCounter.getCountEpisode();
    const charCCount = await charCounter.getCountCharacter();
    console.log('There are '+charLCount+' L letters in the names of Locations');
    console.log('There are '+charCCount+' C letters in the names of Characters');
    console.log('There are '+charECount+' E letters in the names of Episodes');
    const timeOut = microprofiler.measureFrom(start);
    console.log(timeOut + " Microseconds for the CharCounterChallenge");
}

const challenge2 = async () => {
    const start = microprofiler.start();
    const eLocation = await episodeLocation.eLocation();
    console.log(eLocation);
    const timeOut = microprofiler.measureFrom(start);
    console.log(timeOut + " Microseconds for the CharCounterChallenge");
}



main();


