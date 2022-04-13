const generateMarkdown = data => {
  return `# ${data.title}
  ## Description 
  
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}

  ## Contributing 
  ${data.contributors}

  ## Usage 
  ${data.usage}

  ## License 
  This project is license under ${data.license}

  ## Tests
  ${data.test}

  ## Questions
 Please contact me directly at ${data.email} if you have more questions. You can view my github at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;