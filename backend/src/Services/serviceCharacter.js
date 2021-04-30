"use strict";
const URL = "https://rickandmortyapi.com/api/character/";
const helper = require('../Helpers/serviceHelpers');

// Get info for each page in the Rick and Morty Api
const getCharacters = async () => {
    return await helper(URL);
}




module.exports = getCharacters();