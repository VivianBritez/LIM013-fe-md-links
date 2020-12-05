const route = require("./util.js");
const validate = require("./validate.js");

const mdLinks = (inputPath, options) =>
  new Promise((resolve) => {
    const pathAbsolute = route.pathAbsolute(inputPath);
    if (options.validate === true) {
      resolve(validate.validateLinks(pathAbsolute));
    } else {
      resolve(route.getMdLInk(pathAbsolute));
    }
  });

// mdLinks('other-dir', { validate: true }).then((res) => console.log('soy true', res));

// mdLinks('other-dir', { validate: false }).then((res) => console.log('soy option false', res));

module.exports = { mdLinks };
