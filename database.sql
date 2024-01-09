
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

INSERT INTO treats ("name", "description", "map_pic", "route_pic")
VALUES
