const characters =  require('../Services/serviceCharacter');
const episodes = require('../Services/serviceEpisode');


const controller = {
  getCountLocations: async () => {
      const data = await characters;
      if(!data) return "A problem has occurred, please check the Api Url.";
      return getDataReduce(data, 'l');
  },
  getCountCharacter: async () => {
    const data = await characters;
    if(!data) return "A problem has occurred, please check the Api Url.";
    return getDataReduce(data, 'l');
  },
  getCountEpisode: async () => {
    const data = await episodes;
    if(!data) return "A problem has occurred, please check the Api Url.";
    return getDataReduce(data, 'l');
  }
}
const normalize = word => {
  return word.toLowerCase().replace(/[.!,]/g,'');
}

const repeated = (str, letter)=>{
  let hash={};
    for(let word of str){
       if(normalize(word) == letter){
        if(normalize(word) in hash){
            hash[normalize(word)]++;
        }else{
            hash[normalize(word)]=1;
        }
      }
    }
  if(hash[letter]) return hash[letter];
  else return 0;
  
};

const getDataReduce = (data,letter) => {
  let result = 0;
  data.reduce((acc, el) => {
    result += repeated(el.location.name, letter);
  });
  return result;
}




module.exports = controller;