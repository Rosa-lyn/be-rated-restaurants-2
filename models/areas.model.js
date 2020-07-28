const { client } = require("../databases/Client.js");

const fetchAreas = () => {
  //   console.log("you are in fetch areas");
  return client.query("SELECT * FROM areas_schema;").then((result) => {
    return result.rows;
  });
};

const addArea = (areaName) => {
  if (areaName === undefined) return Promise.reject({status:400, msg:"Invalid post body!"})
  return client
    .query("INSERT INTO areas_schema (area_name) VALUES ($1) RETURNING *;", [
      areaName,
    ])
    .then((data) => {
      console.log(data.rows[0])
      const area = data.rows[0]
      return area;
    });
};

module.exports = { fetchAreas, addArea };
