const validate = require('../src/validate.js');

const ouputValidateLinks = [
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
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://github.es/jsdom',
    text: 'JSDOM',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md',
    status: 404,
    statusText: 'Not Found',
  },
  {
    href: 'https://github.com/cheeriojs/cheerio',
    text: 'Cheerio',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
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
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'http.get',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\prueba.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
    text: 'Recursión.',
    path:
      'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\prueba.md',
    status: 200,
    statusText: 'OK',
  },
];
describe('Link validation', () => {
  describe('should validate the links', () => {
    it('Should be a function', () => {
      expect(typeof validate.validateLinks).toBe('function');
    });
    it('should return an array with the properties of: href,text, path, status y StatusText ', () => {
      expect(validate.validateLinks('./test_example')).resolves.toEqual(
        ouputValidateLinks,
      );
    });
    it('not tobe ', () => {
      expect(validate.validateLinks('./test')).resolves.not.toBe(
        ouputValidateLinks,
      );
    });
  });
});

describe('Function to validate the Links found in md file', () => {
  it('Should return an array of object', (done) => {
    validate.validateLinks('./test_example').then((response) => {
      expect(response).toEqual(ouputValidateLinks);
      done();
    });
  });
});
