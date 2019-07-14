const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
require("./config/database");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API documentation
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = process.env.PORT || process.env.PORT_HOST;

// API
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => console.log(`Server running on port ${port}`));
