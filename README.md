# QA API Validator

![npm](https://img.shields.io/npm/v/qa-api-validator)
![Node](https://img.shields.io/node/v/qa-api-validator)
![License](https://img.shields.io/npm/l/qa-api-validator)

A simple Node.js tool for QA engineers to validate API responses.

## Features
- ✅ Validate API status codes
- ✅ Check for the existence of JSON keys in JSON responses

## Installation
```bash
npm install qa-api-validator
```

## Usage
Use it in your Node.js project like this:
```javascript
const { checkStatusCode, checkJSONKey } = require('qa-api-validator');

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    
    const statusCheck = await checkStatusCode(url, 200);
    console.log(`Status 200 check: ${statusCheck ? 'PASS' : 'FAIL'}`);
    
    const keyCheck = await checkJSONKey(url, 'title');
    console.log(`Key 'title' exists: ${keyCheck ? 'PASS' : 'FAIL'}`);
})();
```

## Example Output (in terminal)
```bash
$ node examples/testExample.js
Status 200 check: ✅ PASS
Key 'title' exists: ✅ PASS
```

## .gitignore
```
node_modules/
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Publishing to GitHub and npm
Once your files are ready, run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Ome-Ananenu/API-VALIDATOR.git
git push -u origin main

npm login
npm publish --access public
```
