///
/// @file   index.js
/// @brief  The entry point for our program.
///

// Imports
const mongoose = require('mongoose');
const env = require('node-env-file');

// Load local environment variables in development mode.
// Make sure to create a file named '.env' before running!
if (process.env.NODE_ENV === 'development') {
    env('.env');
}

// Make sure a database URL was provided.
if (!process.env.DB_URL) {
    console.error(`[ERROR] You must specify a MongoDB database URL in your environment variables.`);
    console.error(`[ERROR] Example: DB_URL="mongodb://localhost:27017/testdb"`);
    process.exit(2);
}

// Connect to the MongoDB database before starting.
mongoose.connect(process.env.DB_URL)
    .then(require('./server'))
    .catch((err) => {
        if (process.env.NODE_ENV === 'development') {
            console.error(`[EXCEPTION] ${err.stack}`);
        } else {
            console.error(`[EXCEPTION] ${err}`);
        }

        mongoose.connection.close()
            .then(() => {
                process.exit(1);
            })
            .catch(() => {
                process.exit(1);
            });
    });