#!/usr/bin/env node
//require('../')()

const chalk = require("chalk");
const api = require("./mdLinks.js");
const opt = require("./stats.js");
const [, , ...args] = process.argv;

const ObjValidate = (arg1, arg2) => {
  if (
    (arg1 === "--stats" && arg2 === "--validate") ||
    (arg1 === "--validate" && arg2 === "--stats") ||
    (arg1 === "--validate" && arg2 === undefined)
  ) {
    return { validate: true };
  }
  return { validate: false };
};

console.log("hello soy cli", ...args);

// CLI
const cli = (route, arg1, arg2) => {
  const validate = ObjValidate(arg1, arg2);
  return api
    .mdLinks(route, validate)
    .then((response) => {
      let result = "";
      if (response.length === 0) {
        result = chalk.red("md file or link not found");
      }
      if (
        (arg1 === "--stats" && arg2 === "--validate") ||
        (arg1 === "--validate" && arg2 === "--stats")
      ) {
        result = opt.validateAndStats(response);
      }
      if (arg1 === "--stats" && arg2 === undefined) {
        result = opt.statsOflinks(response);
      }
      if (arg1 === "--validate" && arg2 === undefined) {
        response.forEach((element) => {
          if (element.statusText !== "OK") {
            result += `\n${chalk.white(element.path)} ${chalk.yellow(
              element.href
            )} ${chalk.red(element.status)} ${chalk.red(
              element.statusText
            )} ${chalk.white(element.text)} ✘`;
          } else {
            result += `\n${chalk.white(element.path)} ${chalk.yellow(
              element.href
            )} ${chalk.green(element.status)} ${chalk.green(
              element.statusText
            )} ${chalk.white(element.text)} ✔`;
          }
        });
      }
      if (arg1 === undefined && arg2 === undefined) {
        response.forEach((element) => {
          result += `\n${chalk.white(element.path)} ${chalk.yellow(
            element.href
          )} ${chalk.white(element.text)}`;
        });
      }
      if (arg1 !== "--stats" && arg1 !== "--validate" && arg1 !== undefined) {
        result = chalk.red(
          'The option does not exist. You can use "mdLinks --help" for more information'
        );
      }
      return result;
    })
    .catch(() => chalk.red("Invalid path"));
};
// Opcion de help
const help = `
  ${chalk.yellow.bold`  mdLinks 1.0.0\n`}
  ${chalk.green.bold`  USAGE`}
  ${chalk.white`    mdLinks `}${chalk.white`<path>`} ${chalk.yellow`[options]\n`}
  ${chalk.green.bold`  PATH`}
  ${chalk.white`    Is a absolute o relative path of file or directory.\n`}
  ${chalk.green.bold`  OPTIONS`}
  ${chalk.gray`    -h, --help           `} help.
  ${chalk.gray`    -V, --version        `} version.
  ${chalk.gray`    --stats              `} Basic stadistics on link.
  ${chalk.gray`    --validate           `} Link validation.
  ${chalk.gray`    --stats --validate   `} Stats and validate.
  ${chalk.gray`    -c, --contact        `} Vivian Britez (vivianbritez91@gmail.com).
  `;

if (args.length < 4) {
  if (args[0] === "--help" || args[0] === "-h") {
    console.log(help);
  }
  if (args[0] === undefined) {
    console.log(help);
  }
  if (args[0] === "-V" || args[0] === "--version") {
    console.log("1.0.0");
  }
  if (args[0] === "-c" || args[0] === "--contact") {
    console.log("Vivian Britez (vivianbritez91@gmail.com)");
  } else {
    cli(args[0], args[1], args[2])
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
} else {
  console.log(help);
}

module.exports = { cli };
