const fs = require("fs");
const generateHTML = require("./ui");
const Employee = require("./classes/employee");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const Manager = require("./classes/manager");


const inquirer = require("inquirer");
const data = [];