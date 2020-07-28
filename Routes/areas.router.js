const express = require("express");
const {
  getAreas,
  postAreas,
  getRestaurantsByArea,
} = require("../controllers/areas.controller");

const areaRouter = express.Router();

areaRouter.get("/", getAreas);

areaRouter.post("/", postAreas);

areaRouter.get("/:area_id/restaurants", getRestaurantsByArea);

module.exports = areaRouter;
