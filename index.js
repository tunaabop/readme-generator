// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a short description explaining the what, why, and how of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
    name: 'usage',
  },
  // {
  //   type: 'list',
  //   message: 'Do you have a screenshot for project usage?',
  //   name: 'screenshot',
  //   choices: [ "Yes", new inquirer.Separator(), "No" ]
  // },
  {
    type: 'input',
    message: 'What are the project contributing guidelines for other developers?',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'Any instructions/examples on how to run tests?',
    name: 'testing',
  },
  {
    type: 'input',
    message: 'Almost there, what is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Lastly, what is your email?',
    name: 'email',
  }];

// create function that takes in readme data and apply to readme template 
function generateREADME({title, description, installation, usage, contribute, testing, github, email}){
  return `# ${title}

  ## Description <a name="description"/>
  
  ### Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?

  ${description}
  
  ## Table of Contents (Optional)
  
 ### If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Project Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing Guidelines](#contribute)
  - [Testing Instructions](#testing)
  - [Questions/Contact](#questions)
  
  
  ## Installation <a name="installation"/>
  
  ### What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ${installation}
  
 
  ## Usage  <a name="usage"/>
  
  ### Provide instructions and examples for use. Include screenshots as needed.
 
  ${usage}

  
  ## How to Contribute <a name="contribute"/>
  
  ### If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ${contribute}
  
  
  ## Tests <a name="testing"/>
  
  ### Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  
  ${testing}
  
  
  ## Questions? <a name="questions"/>
    Reach me by email or github:
  ### Email: ${email}
  ### Github Profile: ${github}

  ## Sources for this project:
  [How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
  `;
}
  
// Create a function to write README file
function writeToFile(fileName, data) {
  // generate and save actual README file content
  const readmeContent = generateREADME({...data});
  // write to file
  fs.writeFile(fileName, readmeContent, (err) => 
    err ? console.log(err) : console.log("Successfully created README.md :)")
  );
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
