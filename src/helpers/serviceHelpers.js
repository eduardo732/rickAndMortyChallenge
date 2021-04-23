'use strict'
const axios = require("axios");

module.exports = async URL => {
    const totalPages = await getTotalPages(URL);
    const requests = await getUrls(totalPages,URL);
    let results= await Promise.all(requests)
            .then((res) => {
              let arr=[];
              for(let r of res){
                arr.push(r.data.results);
              }
              return arr;
            })
            .catch(err => {
              console.log(err);
            });
    return results.reduce((acc,el)=>acc.concat(el),[]);      
  }
const getUrls = (totalPages,URL) => {
    let arr=[];
    for(let i=1; i<=totalPages;i++){
      arr.push(axios.get(URL + `?page=${i}`));
    }
    return arr;
  }
  
  const getTotalPages = URL => {
    return new Promise((resolve) => {
          axios
            .get(URL)
            .then((res) => {
              if (res.status === 200) {
                resolve(res.data.info.pages);
              } else {
                resolve("Code: " + res.status + " " + res.statusText);
              }
            })
            .catch((err) => {
              resolve(false)
            });
        });
  }

  