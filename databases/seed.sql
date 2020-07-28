DROP DATABASE IF EXISTS rated_restaurants;
CREATE DATABASE rated_restaurants;

\c rated_restaurants;

CREATE TABLE areas_schema (
    area_id SERIAL PRIMARY KEY,
    area_name VARCHAR(50) 
);

INSERT INTO areas_schema (area_name)
    VALUES ('Poynton'), ('Manchester City Centre');

CREATE TABLE restaurants_schema (
    restaurant_id SERIAL PRIMARY KEY,
    restaurant_name VARCHAR(50),
    area_id INT REFERENCES areas_schema(area_id),
    cuisine VARCHAR(50),
    website VARCHAR(100)
);

CREATE TABLE comments_schema (
    comment_id SERIAL PRIMARY KEY,
    restaurant_id INT REFERENCES restaurants_schema(restaurant_id),
    body VARCHAR(500),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE ratings_schema (
    rating_id SERIAL PRIMARY KEY,
    restaurant_id INT REFERENCES restaurants_schema(restaurant_id),
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM areas_schema;
SELECT * FROM restaurants_schema;
SELECT * FROM comments_schema;
SELECT * FROM ratings_schema;