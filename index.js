const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'usage1',
        message: 'Provide a link to your application:',
    },
    {
        type: 'list',
        message: 'Please select a license for your project',
        name: 'license',
        choices: ['None', 'Apache 2.0 License', 'The MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License 1.0', 'Creative Commons Zero', 'Eclipse Public License 1.0', 'GNU AGPL v3', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide a description of how other developers may contribute:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide a examples of tests users can run on your application:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please type your github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please type your email address:',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    )
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data)=>{
        const fileName = `README.md`
        writeToFile(fileName, generateMarkdown(data))
    })
}

// function call to initialize program
init();
