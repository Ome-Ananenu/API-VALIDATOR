# API Validator

![npm](https://img.shields.io/npm/v/api-validator?color=blue) ![License: MIT](https://img.shields.io/badge/License-MIT-green) ![Node.js](https://img.shields.io/badge/Node.js-%3E=14-brightgreen)

A lightweight Node.js tool for **QA engineers** to validate API responses.  
Easily check if an API returns the expected status code and verify the presence of JSON keys in the response.

## Features
- ✅ Validate API status codes  
- ✅ Check for the existence of JSON keys in JSON responses  

## Installation

Clone the repository:

```bash
git clone https://github.com/Ome-Ananenu/API-VALIDATOR.git
cd API-VALIDATOR
npm install
```

Or install directly via npm:

```bash
npm install api-validator
```

## Usage

```javascript
const { checkStatusCode, checkJSONKey } = require('api-validator');

(async () => {
    const statusCheck = await checkStatusCode('https://jsonplaceholder.typicode.com/todos/1', 200);
    console.log(statusCheck); // true

    const keyCheck = await checkJSONKey('https://jsonplaceholder.typicode.com/todos/1', 'title');
    console.log(keyCheck); // true
})();
```

### Example Output

```bash
true
true
```

### Screenshot

![API Validator Example](./screenshot.png)  
*Replace `screenshot.png` with your actual usage screenshot.*

## .gitignore

```
node_modules/
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Publishing to GitHub and npm

```bash
# Initialize Git repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Ome-Ananenu/API-VALIDATOR.git
git push -u origin main

# Publish to npm
npm login
npm publish --access public
```
