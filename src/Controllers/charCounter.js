const characters = require("../Services/serviceCharacter");
const episodes = require("../Services/serviceEpisode");

const controller = {
  getCountLocations: async () => {
    const data = await characters;
    if (!data) return "A problem has occurred, please check the Api Url.";
    return getDataReduce(data, "l", "location.name");
  },
  getCountCharacter: async () => {
    const data = await characters;
    if (!data) return "A problem has occurred, please check the Api Url.";
    return getDataReduce(data, "c", "name");
  },
  getCountEpisode: async () => {
    const dataE = await episodes;
    if (!dataE) return "A problem has occurred, please check the Api Url.";
    return getDataReduce(dataE, "e", "name");
  },
};
const normalize = (word) => {
  return word.toLowerCase().replace(/[.!,]/g, "");
};

const repeated = (str, letter) => {
  let hash = {};
  for (let word of str) {
    if (normalize(word) == letter) {
      if (normalize(word) in hash) {
        hash[normalize(word)]++;
      } else {
        hash[normalize(word)] = 1;
      }
    }
  }
  if (hash[letter]) return hash[letter];
  else return 0;
};

const getDataReduce = (data, letter, ext) => {
  let result = 0;
  if (ext == "name") {
    if (data.length > 1) {
      data.forEach( el => {
        result += repeated(el.name, letter);
      });
    } else if (data.length == 1) {
      result = repeated(data[0].name, letter);
    }
  } else if (ext == "location.name") {
    if (data.length > 1) {
      data.forEach( el => {
        result += repeated(el.location.name, letter);
      });
    } else if (data.length == 1) {
      result = repeated(data[0].location.name, letter);
    }
  }
  return result;
};

module.exports = {
  controller: controller,
  getDataReduce: getDataReduce,
};
