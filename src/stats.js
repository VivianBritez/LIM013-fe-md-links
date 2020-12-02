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

module.exports = {
  statsOflinks,
  validateAndStats,
};
