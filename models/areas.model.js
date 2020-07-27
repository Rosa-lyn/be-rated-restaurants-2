const { client } = require("../databases/Client.js");

const fetchAreas = () => {
  //   console.log("you are in fetch areas");
  return client.query("SELECT * FROM areas_schema;").then((result) => {
    return result.rows;
  });
};

module.exports = { fetchAreas };
