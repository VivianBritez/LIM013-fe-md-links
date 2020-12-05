const chalk = require('chalk');

const statsOflinks = (hrefLink) => {
  const total = hrefLink.length;
  const unique = new Set(hrefLink.map(({ href }) => href)).size;
  const result = `\n${chalk.green('Total: ')} ${total} \n${chalk.blue('Unique: ')} ${unique}`;
  return result;
};

const validateAndStats = (hrefLInk) => {
  const total = hrefLInk.length;
  const unique = new Set(hrefLInk.map(({ href }) => href)).size;
  const broken = hrefLInk.filter((link) => link.statusText === 'FAIL').length;
  const result = `\n${chalk.green('Total: ')} ${total} \n${chalk.blue('Unique: ')} ${unique} \n${chalk.red('Broken: ')} ${broken}`;
  return result;
};

const ObjValidate = (arg1, arg2) => {
  if ((arg1 === '--stats' && arg2 === '--validate') || (arg1 === '--validate' && arg2 === '--stats') || (arg1 === '--validate' && arg2 === undefined)) {
    return { validate: true };
  }
  return { validate: false };
};

module.exports = {
  statsOflinks,
  validateAndStats,
  ObjValidate,
};
