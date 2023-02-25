const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for new users:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples of how this application can be used:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your preferred license for your project:',
        choices: [
            'Apache License 2.0',
            'MIT license',
            'Mozilla Public License 2.0',
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter guidelines for how you want others to contribute to this project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any tests for your application:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username:',
    },

];

// function to write README file
function writeToFile(fileName, data) {

    // const filename = `${data.name.split(' ').join('-')}.md`;
    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    fs.writeFile(fileName, data, (error) =>
        error ? console.log(error) : console.log("You have successfully generated a new README file with the given information! Check the main folder for the generated-README.md file.")
    );
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions).then((answers) => writeToFile('generated-README.md', generateMarkdown(answers)))
    }

// function call to initialize program
init();