const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
const Shape = require('./shape.js');

class Logo {
    constructor(){
        this.acronym = '';
        this.color = '';
        this.shape = '';
    }
    questions() {
        return inquirer
        .prompt([

            {
                type: 'input',
                name: 'acronym',
                message: 'Please enter an acronym for your logo that is no longer than 3 characters:',
                validate: function(input) {
                    if (input.length <= 3) {
                        return true;
                    } else {
                    return 'Acronym cannot be more than 3 characters. Try again:';
                    }
                }
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please select a shape:',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'list',
                name: 'textColor',
                message: 'Please select a text color:',
                choices: ['Red', 'Purple', 'Blue', 'Green', 'Yellow', 'Orange'],
            },
            {
                type: 'list',
                name: 'shapeColor',
                message: 'Please select a color for the shape:',
                choices: ['Red', 'Purple', 'Blue', 'Green', 'Yellow', 'Orange'],
            }
        ])
        .then(({ acronym, shape, textColor, shapeColor }) => {
            this.acronym = acronym.toUpperCase();
            this.shape = shape;
            this.textColor = textColor;
            this.shapeColor = shapeColor;
        })
        .then(() => {
            const newShape = new Shape();
            const newLogo = newShape.buildShape(this.shape, this.shapeColor, this.acronym, this.textColor);

            return writeFile(
                join(__dirname, '..', 'output', 'logo.html'),
                createDocument(newLogo)
            );
        })
        .then(() => console.log('Created logo.html'))
        .catch((err) => {
            console.log(err);
            console.log('Something went wrong');
        });
    }
}

module.exports = Logo;
