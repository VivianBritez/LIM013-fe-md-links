const path = require('path');
const { mdLinks } = require('../src/mdLinks.js');

describe('mdlinks with process', () => {
    describe('Should return an object', () => {
      it('Shoul be a function', () => {
        expect(typeof mdLinks).toBe('function');
      });
      it('Should return an object with href, text and file', () => {
        expect(
          mdLinks('other-dir\\md-file', { validate: undefined }),
        ).resolves.toEqual([
          {
            href: 'https://www.youtube.com/',
            text: 'youtube',
            file: path.join(process.cwd(), 'other-dir\\md-file\\link.md'),
          },
        ]);
      });
      it('Should return an object with href, text and file when the option is false', () => {
        expect(
          mdLinks('other-dir\\md-file', { validate: false }),
        ).resolves.toEqual([
          {
            href: 'https://www.youtube.com/',
            text: 'https://www.youtube.com/',
            path: path.join(process.cwd(), 'other-dir\\md-file\\link.md'),
          },
        ]);
      });
      it('Should return an object with href, text, path, status and status test when the option is true', () => {
        expect(
          mdLinks('other-dir\\md-file', { validate: true }),
        ).resolves.toEqual([
          {
            href: 'https://www.youtube.com/',
            text: 'https://www.youtube.com/',
            path: path.join(process.cwd(), 'other-dir\\md-file\\link.md'),
            status: 200,
            statusText: 'OK',
          },
        ]);
      });
    });
  });
  