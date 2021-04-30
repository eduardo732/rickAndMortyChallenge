
const characters =  require('../Services/serviceCharacter');
const episodes = require('../Services/serviceEpisode');

const controller = {
    eLocation: async (req, res) => {
        const infoCharacters = await characters;
        const infoEpisodes = await episodes;
        if(!infoCharacters || !infoEpisodes) res.status(500).send({message: "A problem has occurred, please check the Api Url."});
        let hashArray = getHash(infoEpisodes);
        hashArray.forEach(element => {
            element[1] = element[1].map((item,index) => {
                let count = index + 1;
                let id=getCharacterId(item);
                let aux = infoCharacters.find(data => data.id == id);
                return `${count}- Name: ${aux.name}, originName: ${aux.origin.name}`;
            });
        });
        res.status(200).send(hashArray);
    }
    
}
const getHash = infoEpisodes =>{
    let hash={};
    infoEpisodes.forEach(element => {
        hash[element.name]=element.characters;
    });
    return Object.entries(hash);
}
const getCharacterId = str =>{
    let resp=str.split('/');
    return parseInt(resp[resp.length-1]);
}

 module.exports = controller;