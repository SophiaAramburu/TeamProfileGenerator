// run app
const inquirer = require('inquirer');
const Engineer =require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const generate = require('./src/generatehtml');
const fs = require("fs");
const path = require("path");
const distDIR = path.resolve(__dirname, "dist");
const distPath = path.join(distDIR, "index.html");
const teamMembers = [];

