const express = require("express");
const apiRouter = require("./Routes/api.router");
const {Error400, invalidPaths} = require("./errors/index")
const app = express();

app.use(express.json());
app.use("/api", apiRouter);

app.all("/*", invalidPaths);

app.use(Error400)

module.exports = app;
