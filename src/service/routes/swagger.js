const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
var swaggerRouter = express.Router();

// Swagger Set Up
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Isnt API",
            version: "1.0.0",
            description: "description"
        },
        servers: [
            {
                url: "http://localhost:8080/api/v1"
            }
        ]
    },
    apis: []
};

const specs = swaggerJsdoc(options);

swaggerRouter.use("/",swaggerUi.serve);
swaggerRouter.get(
    "/",
    swaggerUi.setup(specs, {
        explorer: true
    })
);

module.exports = {swaggerRouter, getSwagger}