// File system es un modulo de node.js con metodos para trabajar con ficheros.
const fs = require("fs");
// Path provee facilidades para trabajar con ficheros y direcctorios
const path = require("path");


//Metodo que evalua sin la ruta existe
const pathExist = (route) => fs.existsSync(route);
//Evalua si la ruta es absoluta de lo contrario lo convierte
const pathAbsolute = (route) =>
  path.isAbsolute(route) ? route : path.resolve(route);

 //Evalua si la ruta es un archivo
 const getFile = (route) => fs.statSync(route).isFile();

 

//Evalua si el archivo es Markdown
const isMarkdownFile = (route) => path.extname(route) === ".md";

const getAllFiles = (route) => {
  const arrFiles = [];
  const newPath = pathAbsolute(route)
  if( getFile(newPath)){
    if(isMarkdownFile(newPath)){
    arrFiles.push(newPath);
    }

  }else{
    fs.readdirSync(newPath).forEach(element =>{
      const array = getAllFiles(path.join(newPath, element));
      arrFiles.push(...array)// tambien con concat es posible
    });
  }
  
  return arrFiles;
}
 console.log('soy recursividad'+ getAllFiles ('C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\src'));

module.exports = {
  pathExist,
  pathAbsolute,
  getFile,
  isMarkdownFile,
  getAllFiles,
};
