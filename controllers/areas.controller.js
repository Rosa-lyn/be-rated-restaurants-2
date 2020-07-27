const { fetchAreas } = require("../models/areas.model");

const getAreas = (req, res) => {
  //   console.log("you are in get areas");
  fetchAreas().then((areas) => {
    res.send({ total_areas: areas.length, areas });
  });
};

/*{
  POST /api/areas
{
     area: {
       area_id: 12,
       name: 'your-posted-area-name'
     }
}
*/

module.exports = { getAreas };
