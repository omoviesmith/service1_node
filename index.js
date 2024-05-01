'use strict';

var path = require('path');
var http = require('http');
var cors = require('cors'); // Require the CORS package

var oas3Tools = require('oas3-tools');
const { FAILSAFE_SCHEMA } = require('js-yaml');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

app.use(cors({
    origin: 'http://localhost:5000', // Adjust according to where your client is hosted
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
})); // Use CORS middleware to enable CORS

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});