CREATE TABLE "events" (
	"id" serial PRIMARY KEY,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"image_url" varchar,
	"event_date" timestamp NOT NULL,
	"location" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
