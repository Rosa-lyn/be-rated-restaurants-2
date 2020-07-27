const express = require("express");
const apiRouter = require("./Routes/api.router");
const app = express();

app.use("/api", apiRouter);

module.exports = app;
