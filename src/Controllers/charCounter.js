const characters =  require('../Services/serviceCharacter');
const episodes = require('../Services/serviceEpisode');


const controller = {
  getCountLocations: async () => {
      const data = await characters;
      if(!data) return "A problem has occurred, please check the Api Url.";
      let result = 0;
      data.reduce((acc, el) => {
        result += repeated(el.location.name, 'l');
      });
      //console.log('locations name '+result)
      return result; 
  },
  getCountCharacter: async () => {
    const data = await characters;
    if(!data) return "A problem has occurred, please check the Api Url.";
    let result = 0;
    data.reduce((acc, el) => {
      result += repeated(el.name, 'c');
    });
    //console.log('Characters name '+result)
    return result; 
  },
  getCountEpisode: async () => {
    const data = await episodes;
    if(!data) return "A problem has occurred, please check the Api Url.";
    let result = 0;
    data.reduce((acc, el) => {
      result += repeated(el.name, 'e');
    });
    //console.log('Episodes name '+result)
    return result; 
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





module.exports = controller;