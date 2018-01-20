///
/// @file   index.js
/// @brief  The entry point for our application's backend.
///

// Imports
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const httpStatus = require('http-status-codes');

// Export Main Function.
module.exports = () => {
    // Express and Middleware
    const app = express();
    app.use(helmet());
    app.use(cors());
    app.use(compression());
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Wrap the Express instance in an HTTP server object, in case
    // you may want to use Socket.IO.
    const server = http.createServer(app);

    // Insert your API routes here.


    // This catch-all route will give you the HTML file that was generated
    // when Webpack compiled the client code.
    app.get('*', (req, res) => {
        return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    });

    // Catch and handle errors differently depending on whether we are on development
    // or production.
    if (process.env.NODE_ENV === 'development') {
        app.use((err, req, res, next) => {
            console.error(`[Caught Error] ${err.stack}`);
            const status = err.status || 500;

            return res.status(500).json({
                error: {
                    status,
                    type: httpStatus.getStatusText(status),
                    message: err.message,
                    stack: err.stack
                }
            });
        });
    } else {
        app.use((err, req, res, next) => {
            console.error(`[Caught Error] ${err.stack}`);
            const status = err.status || 500;

            return res.status(status).json({
                error: {
                    status,
                    message: httpStatus.getStatusText(status)
                }
            });
        });
    }

    // Start listening for connections.
    server.listen(process.env.PORT || 3000, () => {
        console.log(`Listening on port #${server.address().port}. . .`);
    });
};