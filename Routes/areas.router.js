const express = require("express");
const { getAreas, postAreas } = require("../controllers/areas.controller");

const areaRouter = express.Router();

areaRouter.get("/", getAreas);

areaRouter.post("/", postAreas);

module.exports = areaRouter;
