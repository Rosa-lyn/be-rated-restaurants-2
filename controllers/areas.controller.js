const {
  fetchAreas,
  addArea,
  fetchRestaurantsByArea,
} = require("../models/areas.model");

const getAreas = (req, res) => {
  fetchAreas().then((areas) => {
    res.send({ total_areas: areas.length, areas });
  });
};

const postAreas = (req, res, next) => {
  const areaName = req.body.area_name;
  addArea(areaName)
    .then((area) => {
      res.status(201).send({ area });
    })
    .catch(next);
};

const getRestaurantsByArea = (req, res, next) => {
  const areaId = Number(req.params.area_id);
  // console.log(areaId);
  fetchRestaurantsByArea(areaId).then((restaurantsByArea) => {
    res.status(200).send({ restaurantsByArea });
  });
};

module.exports = { getAreas, postAreas, getRestaurantsByArea };
