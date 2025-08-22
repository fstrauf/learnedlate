ALTER TABLE "coffees" ADD COLUMN "collection_url" varchar(500);--> statement-breakpoint
ALTER TABLE "roasters" ADD COLUMN "country" varchar(100);--> statement-breakpoint
CREATE INDEX "coffees_collection_url_idx" ON "coffees" USING btree ("collection_url");