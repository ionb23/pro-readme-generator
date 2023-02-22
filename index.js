const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project in a few sentences.',
      },
      {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
