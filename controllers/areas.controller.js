const { fetchAreas, addArea } = require("../models/areas.model");

const getAreas = (req, res) => {
  fetchAreas().then((areas) => {
    res.send({ total_areas: areas.length, areas });
  });
};

const postAreas = (req, res) => {
  const areaName = req.body.area_name;
  addArea(areaName).then((area) => {
    res.status(201).send({ area });
  });
};

module.exports = { getAreas, postAreas };
