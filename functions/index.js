const functions = require('firebase-functions');
const app = require('./src/app');


// api
exports.api = functions.https.onRequest(app);
