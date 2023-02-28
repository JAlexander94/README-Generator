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
        message: 'Provide a short description explaining the what, why, and how of your project.\nUse the following questions as a guide:\n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to get the development environment running:',
    },
    {
        type: 'input',
        name: 'usage',
        message: '',
    },
    {
        type: 'list',
        message: 'Please select a license for your project',
        name: 'license',
        choices: ['None', 'Apache 2.0 License', 'The MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License 1.0', 'Creative Commons Zero', 'Eclipse Public License 1.0', 'GNU AGPL v3', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'contribution',
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
    fs.writeFile(fileName, JSON.stringify(data, null, '\n'), (err) =>
      err ? console.log(err) : console.log('Success!')
    )
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data)=>{
        generateMarkdown(data)
        const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`
        writeToFile(fileName, data)
    })
}

// function call to initialize program
init();
