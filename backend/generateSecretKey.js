const crypto = require('crypto');

// Generate a random 64-byte secret key
const secretKey = crypto.randomBytes(64).toString('hex');
console.log('Your JWT Secret Key:', secretKey);
