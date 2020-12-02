const chalk = require('chalk');
const stats = require('../src/stats.js');

const arrayLinks1 = [
  {
    href: 'https://github.com/markdown-it/markdown',
    text: 'markdown-it',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href:
      'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (<code>RegExp</code>)',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href:
      'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (<code>RegExp</code>)',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'http://community.ong/',
    text: 'foro de la comunidad',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md',
    status: 'ERROR',
    statusText: 'FAIL',
  },
];
const output1 = `\n${chalk.green('Total: ')} 5 \n${chalk.blue('Unique: ')} 4`;

const output2 = `\n${chalk.green('Total: ')} 5 \n${chalk.blue(
  'Unique: ',
)} 4 \n${chalk.red('Broken: ')} 1`;

describe('Show Statistic', () => {
  describe('Should show statistic about total and unique of href', () => {
    it('Should be a function', () => {
      expect(typeof stats.statsOflinks).toBe('function');
    });
    it('Should return total = 4 , unique= 3', () => {
      expect(stats.statsOflinks(arrayLinks1)).toBe(output1);
    });
    it('Should return total = 4 , unique= 3', () => {
      expect(stats.validateAndStats(arrayLinks1)).toBe(output2);
    });
  });
});
