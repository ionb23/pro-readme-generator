// converts chosen license string to license badge from shields.io
function displayBadge(licenseChosen) {
  switch (licenseChosen) {
    case 'Apache License 2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'MIT license':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Mozilla Public License 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
  }
}


// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${displayBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about this project, please reach out to me at ${data.email}.

You can find my profile with all my other projects within my [GitHub profile](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;