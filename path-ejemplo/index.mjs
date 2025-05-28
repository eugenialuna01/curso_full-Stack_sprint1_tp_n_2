//Módulo 1: path Ejemplo

import path from 'path';

//Definir una ruta de archivo de ejemplo
const filePath ='./data/example.txt'; /// ?????Asigna a filePath la ruta del archivo 'example.txt' ubicado en './data' ???????
 

/* ***Lo que nunca entendí***
filePath = './data/example.txt';
dirName = './data';       // Directorio (ruta de la carpeta)
baseName = 'example';     // Nombre del archivo (sin extensión)*/



//Obtener directorio base - Extrae solo la ruta del directorio, sin incluir el archivo.
const dirName = path.dirname(filePath);
console.log('Directorio base', dirName);

// Obtener el nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

// Obtener la extensión del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

// Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);
