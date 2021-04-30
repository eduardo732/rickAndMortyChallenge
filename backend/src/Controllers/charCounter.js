const characters = require("../Services/serviceCharacter");
const episodes = require("../Services/serviceEpisode");

const controller = {
  getCountLocations: async (req, res) => {
    const data = await characters;
    if (!data) res.status(500).send({message: "A problem has occurred, please check the Api Url."});
    const resp = getDataReduce(data, "l", "location.name");
    res.status(200).send({message: `There are ${resp} L letters in the names of Locations`});
  },
  getCountCharacter: async (req, res) => {
    const data = await characters;
    if (!data) res.status(500).send({message: "A problem has occurred, please check the Api Url."});
    const resp = getDataReduce(data, "c", "name");
    res.status(200).send({message: `There are ${resp} C letters in the names of Characters`});
  },
  getCountEpisode: async (req, res) => {
    const dataE = await episodes;
    if (!dataE) return res.status(500).send({message: "A problem has occurred, please check the Api Url."});
    const resp = getDataReduce(dataE, "e", "name");
    res.status(200).send({message: `There are ${resp} C letters in the names of Episodes`});
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
