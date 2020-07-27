const express = require("express");
const { getAreas } = require("../controllers/areas.controller");

const areaRouter = express.Router();

areaRouter.get("/", getAreas);

module.exports = areaRouter;
