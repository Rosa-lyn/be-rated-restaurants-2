const { client } = require("../databases/Client.js");

const fetchAreas = () => {
  //   console.log("you are in fetch areas");
  return client.query("SELECT * FROM areas_schema;").then((result) => {
    return result.rows;
  });
};

const addArea = (areaName) => {
  return client
    .query("INSERT INTO areas_schema (area_name) VALUES ($1) RETURNING *;", [
      areaName,
    ])
    .then((area) => {
      return area.rows[0];
    });
};

module.exports = { fetchAreas, addArea };
