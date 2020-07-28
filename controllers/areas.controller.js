const { fetchAreas, addArea } = require("../models/areas.model");
const { nextTick } = require("process");

const getAreas = (req, res) => {
  fetchAreas().then((areas) => {
    res.send({ total_areas: areas.length, areas });
  });
};

const postAreas = (req, res, next) => {
  const areaName = req.body.area_name;
  addArea(areaName).then((area) => {
    res.status(201).send({ area });
  })
  .catch(next)
};



module.exports = { getAreas, postAreas };
