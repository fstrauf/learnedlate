CREATE TABLE "brewing_guides" (
	"id" serial PRIMARY KEY NOT NULL,
	"coffee_id" integer NOT NULL,
	"water" text,
	"grind_size" text,
	"ratio" text,
	"bloom_time" text,
	"bloom_water" text,
	"pour_instructions" text,
	"total_time" text,
	"additional_notes" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "brewing_guides" ADD CONSTRAINT "brewing_guides_coffee_id_coffees_id_fk" FOREIGN KEY ("coffee_id") REFERENCES "public"."coffees"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "brewing_guides_coffee_id_idx" ON "brewing_guides" USING btree ("coffee_id");