const fetch = require("node-fetch");
const routes = require("./util.js")

const validateLinks= (route) => {
    const arrayOfLinks = routes.getMdLInk(route);
    const arrayLinksPromises = arrayOfLinks.map((element) => fetch(element.href)
    .then((res)=>{
      if(res.status >=200 && res.status < 400){
        return{
          ...element,
          status: res.status,
          statusText: res.statusText
        };
      }
      return {
        ...element,
        status: res.status,
        statusText: "FAIL",
      };
    })
    .catch(()=> ({
      ...element,
      status: "ERROR",
      statusText: "FAIL"
    })));
    return Promise.all(arrayLinksPromises);
  };
  validateLinks('./test_example').then((res) => console.log(res));

  module.exports = {
      validateLinks,
  }