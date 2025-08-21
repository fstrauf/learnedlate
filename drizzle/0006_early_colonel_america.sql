CREATE TABLE "coffee_changes" (
	"id" serial PRIMARY KEY NOT NULL,
	"coffee_id" integer,
	"roaster_id" integer NOT NULL,
	"external_id" varchar(255),
	"changed_at" timestamp DEFAULT now(),
	"field_name" varchar(100),
	"old_value" text,
	"new_value" text,
	"change_type" varchar(50)
);
--> statement-breakpoint
ALTER TABLE "coffee_changes" ADD CONSTRAINT "coffee_changes_coffee_id_coffees_id_fk" FOREIGN KEY ("coffee_id") REFERENCES "public"."coffees"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "coffee_changes" ADD CONSTRAINT "coffee_changes_roaster_id_roasters_id_fk" FOREIGN KEY ("roaster_id") REFERENCES "public"."roasters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "coffee_changes_coffee_id_idx" ON "coffee_changes" USING btree ("coffee_id");--> statement-breakpoint
CREATE INDEX "coffee_changes_roaster_id_idx" ON "coffee_changes" USING btree ("roaster_id");--> statement-breakpoint
CREATE INDEX "coffee_changes_changed_at_idx" ON "coffee_changes" USING btree ("changed_at");--> statement-breakpoint
CREATE INDEX "coffee_changes_field_name_idx" ON "coffee_changes" USING btree ("field_name");