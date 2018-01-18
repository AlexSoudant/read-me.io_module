/**
 * Checkbox list examples
 */

'use strict';
var inquirer = require('..');

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'Select Angular section',
      name: 'sections',
      choices: [
        new inquirer.Separator(' = available sections  = '),
        {
          name: 'HowToUse'
        },
        {
          name: 'Running Test'
        },
        {
          name: 'Updates'
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
