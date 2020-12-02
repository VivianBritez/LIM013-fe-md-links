const route = require('./util.js');
const validate = require('./validate.js');

const mdLinks = (inputPath, options = { validate: false }) => new Promise((resolve) => {
  if (route.pathAbsolute(inputPath)) {
    if (options.validate === true) {
      resolve(validate.validateLinks(inputPath));
    } else {
      resolve(route.getMdLInk(inputPath));
    }
  }
});

// mdLinks('./test_example', { validate: undefined }).then((res) => console.log('soy Mdlink', res));

mdLinks('other-dir\\md-file', { validate: false }).then((res) => console.log('soy option false', res));

module.exports = { mdLinks };
