const fetch = require("node-fetch");
const routes = require("./util.js");

const validateLinks = (route) => {
  const arrayOfLinks = routes.getMdLInk(route); // archivos md
  const arrayLinksPromises = arrayOfLinks.map((element) =>
    fetch(element.href).then((res) =>
      ({
        ...element,
        status: res.status,
        statusText: res.statusText,
      }.catch(() => ({
        ...element,
        status: "ERROR",
        statusText: "FAIL",
      })))
    )
  );

  // se cumple cuando todas las promesas del iterable dado se han cumplido
  // Si se pasa un array vacío a all , la promesa se cumple inmediatamente.
  return Promise.all(arrayLinksPromises);
};
validateLinks('test_example').then((res) => console.log('soy validate', res));

module.exports = {
  validateLinks,
};
