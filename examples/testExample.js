const { checkStatusCode, checkJSONKey } = require('../index'); 

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    
    const statusCheck = await checkStatusCode(url, 200);
    console.log(`Status 200 check: ${statusCheck ? 'PASS' : 'FAIL'}`);
    
    const keyCheck = await checkJSONKey(url, 'title');
    console.log(`Key 'title' exists: ${keyCheck ? 'PASS' : 'FAIL'}`);
})();
