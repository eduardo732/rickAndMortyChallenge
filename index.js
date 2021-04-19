"use strict";
const https = require("https");
const URL = "https://rickandmortyapi.com/api/character/";
const microprofiler = require('microprofiler');

function getInfo() {
  let currentPage = 0;
  let results=[];
  function loadNextPage(){
    currentPage++;
    return new Promise((resolve, reject) => {
        https.get(URL + `?page=${currentPage}`, (res) => {
            if (res.statusCode === 200) {
                let rawData = '';
                res.on('data', chunk => {
                    rawData += chunk;
                });
                res.on('end', () => {
                    const parsedData = JSON.parse(rawData);
                    results.splice(-1, 0, ...parsedData.results);
                    const parsedTotalPages = parseInt(parsedData.info.pages);
                    if(!isNaN(parsedTotalPages) && currentPage < parsedTotalPages)
                        loadNextPage();
                    else{
                        resolve(results)
                    }
                });
                //resolve(JSON.parse(body));
            } else {
                resolve("Code: " + res.statusCode + " " + res.statusMessage);
            }
        });
    });
  }
  return loadNextPage();
}

async function main() {
  const info = await getInfo();
  if (typeof info != "string") {
    console.log("Apis conectadas");
    //APLICAR LOGICA
  } else {
    if (typeof info == "string") console.warn("La api falla " + info);
  }
}

var start = microprofiler.start();
main();
var elapsedUs = microprofiler.measureFrom(start);
console.log(elapsedUs);
