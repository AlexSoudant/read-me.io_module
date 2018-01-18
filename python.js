/**
 * Checkbox list examples
 */

'use strict';
var inquirer = require('..');

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'Select Python section',
      name: 'sections',
      choices: [
        new inquirer.Separator(' = available sections  = '),
        {
          name: 'Python version'
        },
        {
          name: 'Dependencies'
        },
        {
          name: 'About the project'
        }
      ],
      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one section.';
        }
        return true;
      }
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });
