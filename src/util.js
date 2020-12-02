// File system es un modulo de node.js con metodos para trabajar con ficheros.
const fs = require('fs');

// Path es un módulo que  provee facilidades para trabajar con ficheros y direcctorios
const path = require('path');

// marqued trabaja con markdown directamente.
const marked = require('marked');

// Metodo que evalua sin la ruta existe
const pathExist = (route) => fs.existsSync(route);
// Evalua si la ruta es absoluta de lo contrario lo convierte
const pathAbsolute = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// Evalua si la ruta es un archivo
const getFile = (route) => fs.statSync(route).isFile();

// Evalua si el archivo es Markdown
const isMarkdownFile = (route) => path.extname(route) === '.md';

// recursividad
const getAllFiles = (route) => {
  const arrFiles = [];
  const newPath = pathAbsolute(route);
  if (getFile(newPath)) {
    if (isMarkdownFile(newPath)) {
      arrFiles.push(newPath);
    }
  } else {
    fs.readdirSync(newPath).forEach((element) => {
      const array = getAllFiles(path.join(newPath, element));// unir
      arrFiles.push(...array); // spread
    });
  }

  return arrFiles;
};
// console.log("soy recursividad",getAllFiles('C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example'));

const getMdLInk = (route) => {
  if (!pathExist(route)) {
    throw new Error('Invalid Path');
  } else {
    const arrOfMd = getAllFiles(route);
    const renderer = new marked.Renderer(); // customizar dependiendo de la sintaxis
    const arrOfLinks = [];
    arrOfMd.forEach((fileRoute) => {
      const file = fs.readFileSync(fileRoute, 'utf8');
      renderer.link = (urlFile, _, urlText) => {
        arrOfLinks.push({
          href: urlFile,
          text: urlText,
          path: fileRoute,

        });
      };
      marked(file, { renderer });
    });
    return arrOfLinks;
  }
};
// console.log(getMdLInk('C:/Users/vivia/Documents/md-links/LIM013-fe-md-links/test_example'));

module.exports = {
  pathExist,
  pathAbsolute,
  getFile,
  isMarkdownFile,
  getAllFiles,
  getMdLInk,
};
