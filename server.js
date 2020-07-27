const express = require("express");
const apiRouter = require("./Routes/api.router");
const app = express();

app.use("/api", apiRouter);

// app.listen(9090, () => {
//   console.log("App server is running");
// });

module.exports = app;
