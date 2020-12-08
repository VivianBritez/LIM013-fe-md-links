const path = require('path');
const { fetchMock } = require('../_mocks_/node-fetch.js');
const { mdLinks } = require('../src/mdLinks.js');

fetchMock
  .mock('https://github.es/jsdom', 404)
  .mock('https://www.youtube.com/', 200)
  .mock('https://www.facebook.com/', 200)
  .mock('https://ww.youtube.com/', 500);

const pathAbsolute = path.resolve('other-dir\\md-file');

const optionFalse = [
  {
    href: 'https://github.es/jsdom',
    path: 'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\other-dir\\md-file\\404.md',
    text: 'https://github.es/jsdom',
  },
  {
    href: 'https://www.youtube.com/',
    text: 'https://www.youtube.com/',
    path: 'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\other-dir\\md-file\\link.md',
  },
  {
    href: 'https://www.facebook.com/',
    text: 'https://www.facebook.com/',
    path: 'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\other-dir\\md-file\\linkFacebook.md',
  },
  {
    href: 'https://ww.youtube.com/',
    text: 'https://ww.youtube.com/',
    path: 'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\other-dir\\md-file\\linkfalse.md',
  },
];
const optionTrue = [
  {
    href: 'https://github.es/jsdom',
    text: 'https://github.es/jsdom',
    path: 'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\other-dir\\md-file\\404.md',
    status: 404,
    statusText: 'Not Found',
  },
  {
    href: 'https://www.youtube.com/',
    text: 'https://www.youtube.com/',
    path: 'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\other-dir\\md-file\\link.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://www.facebook.com/',
    text: 'https://www.facebook.com/',
    path: 'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\other-dir\\md-file\\linkFacebook.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://ww.youtube.com/',
    text: 'https://ww.youtube.com/',
    path: 'C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\other-dir\\md-file\\linkfalse.md',
    status: '500',
    statusText: 'FAIL',
  },
];

describe('Function to validate the Links found in md file', () => {
  it('It should return an object array without validating the links', () => expect(mdLinks(pathAbsolute)).resolves.toEqual(optionFalse));

  it('should return a list whith href, path, text, status and ok and fail', () => mdLinks(pathAbsolute, { validate: true }).then((response) => {
    expect(response).toEqual(optionTrue);
  }));
  it('should validate the links', () => mdLinks(pathAbsolute, { validate: false })
    .then((response) => {
      expect(response).toEqual(optionFalse);
    }).catch((error) => {
      console.log(error);
    }));
});


