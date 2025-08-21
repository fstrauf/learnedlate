ALTER TABLE "roasters" ADD COLUMN "shipping_cost_standard" numeric(10, 2);--> statement-breakpoint
ALTER TABLE "roasters" ADD COLUMN "free_shipping_threshold" numeric(10, 2);--> statement-breakpoint
ALTER TABLE "roasters" ADD COLUMN "subscription_discount" numeric(5, 2);--> statement-breakpoint
ALTER TABLE "roasters" ADD COLUMN "signup_discount" numeric(5, 2);