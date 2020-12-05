const fetch = require('node-fetch');
const routes = require('./util.js');

const validateLinks = (route) => {
  const arrayOfLinks = routes.getMdLInk(route);// archivos md
  const arrayLinksPromises = arrayOfLinks.map((element) => fetch(element.href)
    .then((res) => {
      if (res.status >= 200 && res.status < 400) {
        return {
          ...element,
          status: res.status,
          statusText: res.statusText,
        };
      }
      return {
        ...element,
        status: res.status,
        statusText: res.statusText, // Not found 404
      };
    })
    .catch(() => ({
      ...element,
      status: 'ERROR',
      statusText: 'FAIL',
    })));

  // se cumple cuando todas las promesas del iterable dado se han cumplido
  // Si se pasa un array vacío a all , la promesa se cumple inmediatamente.
  return Promise.all(arrayLinksPromises);
};
//validateLinks('./test_example').then((res) => console.log('soy validate', res));

module.exports = {
  validateLinks,
};
