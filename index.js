const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "apptitle",
            message: "Please enter the title of your application"
        },
        {
            type: "input",
            name: "appdescription",
            message: "Please enter a description of your application"
        },
        {
            type: "checkbox",
            message: "Please choose the elements you would like to include in your table of contents?",
            name: "contents",
            choices: [
                "Title",
                "Description",
                "Installation",
                "Useage",
                "License",
                "Contributing",
                "Tests",
                "Questions"

            ]
        },

        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running",

        },

        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use. Include screenshots as needed"
        },

        {
            type: "input",
            name: "credits",
            message: "List your collaborators, if any, with links to their GitHub profiles"

        },

        {
            type: "checkbox",
            message: "Please choose the type of license for your app",
            name: "license",
            choices: [
                "APM",
                "AUR License",
                "Bower",
                "Cocoapodes",
                "Condo-License",
                "CPAN",
                "CRAN/METACRAN",
                "Crates.io",
                "CTAN",
                "DUB",
                "Eclipse Marketplace",
                "Github",
                "Hex.pm",
                "NPM",
                "Packagist License",
                "PyPI-License"

            ]
        },

        {
            type: "input",
            name: "package",
            message: "Please input package name"
        },

        {
            type: "input",
            name: "contributing",
            message: "If you would like other developers to contribute it, please add guidelines for how to do so"
        },

        {
            type: "input",
            name: "tests",
            message: "Please provide links to any tests"
        },
    ]);

}



function generateREADME(data) {
    console.log(data);
    return `
# README for ${data.apptitle}
          
## Description 
              
My app does ${data.appdescription}
        
## Table of Contents
* ${data.contents[0]}
* ${data.contents[1]}
* ${data.contents[2]}
* ${data.contents[3]}
* ${data.contents[4]}
* ${data.contents[5]}
* ${data.contents[6]}
* ${data.contents[7]}
 
## Installation
${data.installation}

## Usage 
${data.installation}
(Screenshots to be added once README created)

## Credits
${data.installation}

## License
${data.license}

## Badges
(shields.io for badges relevant to license)
![NPM](https://img.shields.io/npm/l/${data.package})

## Contributing
${data.contributing}
Note: the [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard

## Tests
${data.tests}

## Questions

`;
}


async function init() {
    console.log("hi")
    try {
        const data = await promptUser();

        const md = generateREADME(data);

        const filename = data.apptitle.toLowerCase().split(' ').join('') + ".md";

        await writeFileAsync("appname.md", md);

        console.log("Successfully created README.md");
    } catch (err) {
        console.log(err);
    }
}

init();