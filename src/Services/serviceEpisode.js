"use strict";
const URL = "https://rickandmortyapi.com/api/episode/";
const helper = require('../helpers/serviceHelpers');
// Get info for each page in the Rick and Morty Api
const getEpisodes = async () => {
  return await helper(URL);
}


module.exports = getEpisodes();