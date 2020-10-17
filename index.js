var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "apptitle",
        message: "Please enter the title of your application"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your application"
    },
    {
        type: "list",
        message: "Please enter your table of contents?",
        name: "contact",
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
        type: "checkbox",
        message: "What sort of installation would you like?",
        name: "installation",
        choices: [
            "installation type 1",
            "installation type 1",
            "installation type 1",
            "installation type 1"
        ]
    },

]).then(function (data) {

    var filename = data.apptitle.toLowerCase().split(' ').join('') + ".md";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
});
