
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "routes" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(100),
    "description" text,
	"map_pic" varchar(255),
	"route_pic" varchar(255)
);

INSERT INTO "routes" ("name", "description", "map_pic", "route_pic")
VALUES
('Highway 60 Wabasha', 'Route 60 is a scenic backroad with lots of curves & nature to take in as it runs through the Richard J Dorer Memorial Hardwood State Forest.', 'Highway60map.png'),
('Scenic Byway 16', 'an 88-mile route in Minnesota that runs from Dexter to the Mississippi River', 'ScenicByway16.png')
