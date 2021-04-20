"use strict";
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/episode/";

// Get info for each page in the Rick and Morty Api

const getEpisodes = async () => {
  let currentPage = 0;
  let results = [];
  let flag = true;
  while (flag) {
    let res = await loadNextPage(currentPage);
    if (res == false) {
      flag = false;
      break;
    }
    results.push(res);
    currentPage++;
  }
  if(results.length > 0) return results.reduce((acc,el)=>acc.concat(el),[]);
    else return false;
}

const loadNextPage = currentPage => {
  return new Promise((resolve) => {
    axios
      .get(URL + `?page=${currentPage}`)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data.results);
        } else {
          resolve("Code: " + res.status + " " + res.statusText);
        }
      })
      .catch((err) => {
        resolve(false)
      });
  });
}

module.exports = getEpisodes();