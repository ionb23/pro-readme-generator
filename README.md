# Professional README Generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
---
A command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

<br>

## Table of Contents
---
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

<br>

## Installation
---
Run `npm i inquirer@6.5.0` in your terminal to install the dependencies required to run this application.

<br>

## Usage
---
In order to use this application, run `node index.js` in your terminal. You will then be prompted to enter information related to your project needed to generate the README.md file with:

* The title of my project 
* Sections entitled:
    * Description 
    * Table of Contents 
    * Installation 
    * Usage 
    * License 
    * Contributing 
    * Tests 
    * Questions


- When a user enters the project title then it is displayed as the title of the README

- When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
- When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
- When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
- When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

<br>

## License
---
Copyright (c) Ion. All rights reserved.

Licensed under the MIT license.

<br>

## Contributing
---
There are many ways in which you can participate in this project, for example:

* [Submit bugs and feature requests](https://github.com/ionb23/pro-readme-generator/issues), and help us verify as they are checked in
* Review source code changes
* Review the documentation and make pull requests for anything from typos to additional and new content

<br>

## Tests
---
You can run tests on this application by forking it and testing it in your own environment.

<br>

## Application Demo
---
The walkthrough video below demonstrates the functionality of the application:

[Click to open video.](https://drive.google.com/file/d/1efZXAyov_b_hGGX7r2BRzlexIcS9hIqz/view?usp=sharing).

<br>

## Questions
---
If you have any questions about this project, please reach out to me at ion.borziac@gmail.com.

You can find my profile with all my other projects in my [GitHub profile](https://github.com/ionb23/).