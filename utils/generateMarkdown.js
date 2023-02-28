// array of licences and their badge urls
const licences = [['None','None'], ['Apache 2.0 License','[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'], ['The MIT License','[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'], ['BSD 2-Clause License','[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'], ['BSD 3-Clause License','[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'], ['Boost Software License 1.0','[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'], ['Creative Commons Zero','[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'], ['Eclipse Public License 1.0','[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'], ['GNU AGPL v3','[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'], ['GNU GPL v3','[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'], ['GNU LGPL v3','[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'], ['Mozilla Public License 2.0','[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'], ['The Unlicense','[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)']]

// function to generate markdown for README
function generateMarkdown(data) {
  let licensekey = licences.find((innerArr) => innerArr[0] === data.license)
  return `# ${data.title}\n
  ${licensekey[1]}\n
  ## Description\n
  ${data.description}\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [license](#license)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [Questions](#questions)\n
  ## Installation\n
  ${data.installation}\n
  ## Usage\n
  ${data.usage}\n
  ${data.usage1}\n
  ## License\n
  This application uses ${data.license}\n
  ## Contributing\n
  ${data.contributing}\n
  ## Tests\n
  ${data.tests}\n
  ## Questions\n
  Github username: ${data.github}\n
  Click [here](https://github.com/${data.github}) to go to my Github Profile\n
  If you have any questions please [email me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
