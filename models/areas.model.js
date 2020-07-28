const { client } = require("../databases/Client.js");

const fetchAreas = () => {
  //   console.log("you are in fetch areas");
  return client.query("SELECT * FROM areas_schema;").then((result) => {
    return result.rows;
  });
};

const addArea = (areaName) => {
  if (areaName === undefined)
    return Promise.reject({ status: 400, msg: "Invalid post body!" });
  return client
    .query("INSERT INTO areas_schema (area_name) VALUES ($1) RETURNING *;", [
      areaName,
    ])
    .then((data) => {
      // console.log(data.rows[0]);
      const area = data.rows[0];
      return area;
    });
};

const fetchRestaurantsByArea = (areaId) => {
  // console.log(areaId);
  return client
    .query(
      "SELECT * FROM restaurants_schema INNER JOIN areas_schema ON restaurants_schema.area_id = areas_schema.area_id WHERE areas_schema.area_id = ($1);",
      [areaId]
    )
    .then((data) => {
      const restaurantsByArea = data.rows;
      const areaName = restaurantsByArea[0].area_name;
      const totalRestaurants = restaurantsByArea.length;
      const finalRestaurants = restaurantsByArea.map((restaurant) => {
        restaurant["name"] = restaurant.restaurant_name;
        delete restaurant.restaurant_name;
        delete restaurant.area_name;
        return restaurant;
      });
      const restaurants = {
        area_id: areaId,
        name: areaName,
        total_restaurants: totalRestaurants,
        restaurants: finalRestaurants,
      };

      // console.log(restaurants);
      return restaurants;
    });
};

module.exports = { fetchAreas, addArea, fetchRestaurantsByArea };
