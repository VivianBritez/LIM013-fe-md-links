<h1>Markdown Links</h1>

- [1. Background Project](#1-background-project)
- [2. Objective of the project](#2-objetive-of-the-project)
- [3. Installation](#3-installation)
- [4. How to use?](#4-how-to-use)
- [5. Flowchart](#5-flowchart)
- [6. Organization](#6-organization)
- [7. Checklist](#8-checklist)

---

## 1.Background Project

Module to validate links of .md Files.

## 2.Objective of the project

Develop a functional library that is capable of returning the links found within a markdown file and validating those that still work or not from the command line or as an API in a JavaScript file requiring it as a module. Statistics are also part of the results to be obtained in this project.

## 3.Installation

- Have node.js installed
- Open the terminal on your computer.
- Position yourself in the project folder you want to analyze.
- Paste the following command in terminal:
- npm i vivianbri-md

### Global way

- npm install -g vivianbri-md

## 4.How to use?

vivianbri-md can be run from the terminal or from a JavaScript file.

### From terminal

1. Have vivianbri-md installed
2. Type in terminal md + Enter
3. To know which links are still valid add the --validate flag:
4. md-links file- - validate
   <img src="https://i.ibb.co/kMFMMvs/2020-12-07-12.png" alt="2020-12-07-12" border="0">

##### This will return a list of links with their status 'OK' or 'FAIL', in addition to containing the statements with the links that no longer work.

1. To know how many links there are, add the --stats flag:

- md-links file --stats

<img src="https://i.ibb.co/Ky7VydZ/2020-12-07-11.png" alt="2020-12-07-11" border="0">

##### This will return the total of links, and how many of them are not repeated.

1. If you want to know how many links are "broken" you should include both flags.

- md-links file --stats --validate

<img src="https://i.ibb.co/Ky7VydZ/2020-12-07-11.png" alt="2020-12-07-11" border="0">

##### This will return the total of links, how many of them are not repeated and how many are broken.

## 5.Flowchart

## Api

<img src="https://i.ibb.co/x3HYccp/Untitled-Diagram-Page-1.png" alt="Untitled-Diagram-Page-1" border="0">

## CLI

<img src="https://i.ibb.co/t3JYy0M/Untitled-Diagram-Page-2.png" alt="Untitled-Diagram-Page-2" border="0">

## 6.Organization

<img src="https://i.ibb.co/rvnxCWK/github-project.png" alt="github-project" border="0">

## 7. Checklist

### General

- [x] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

- [x] Un board con el backlog para la implementación de la librería.
- [x] Documentación técnica de la librería.
- [x] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [x] El módulo exporta una función con la interfaz (API) esperada.
- [x] Implementa soporte para archivo individual
- [x] Implementa soporte para directorios
- [x] Implementa `options.validate`

### CLI

- [x] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [x] Se ejecuta sin errores / output esperado
- [x] Implementa `--validate`
- [x] Implementa `--stats`

### Pruebas / tests

- [x] Pruebas unitarias cubren un mínimo del 90% de statements, functions,
      lines, y branches.
- [x] Pasa tests (y linters) (`npm test`).
