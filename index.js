const axios = require('axios');

async function checkStatusCode(url, expectedStatus) {
    try {
        const response = await axios.get(url);
        return response.status === expectedStatus;
    } catch (error) {
        return false;
    }
}

async function checkJSONKey(url, key) {
    try {
        const response = await axios.get(url);
        return key in response.data;
    } catch (error) {
        return false;
    }
}

module.exports = { checkStatusCode, checkJSONKey };
