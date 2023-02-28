// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ## Description\n
  ${data.description}\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [license](#license)\n
  - [Contribution](#contribution)\n
  - [Tests](#tests)\n
  ## Installation\n
  ${data.installation}\n
  ## Usage\n
  ${data.usage}\n
  ## License\n
  ${data.license}\n
  ## How to Contribute\n
  ${data.contribution}\n
  ## Tests\n
  ${data.tests}\n
  ## Questions\n
  Github username: [${data.github}](https://github.com/${data.github})
  If you have any questions please [email me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
