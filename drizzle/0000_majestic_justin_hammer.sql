-- Migration already applied manually
-- Tables 'roasters' and 'coffees' already exist in the database
-- This file serves as a marker for Drizzle's migration tracking

-- Verify tables exist (these should be no-ops since tables already exist)
-- If you get errors, it means the tables already exist which is expected

DO $$
BEGIN
    -- Add indexes only if they don't exist
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'coffees_roaster_id_idx') THEN
        CREATE INDEX "coffees_roaster_id_idx" ON "coffees" USING btree ("roaster_id");
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'coffees_origin_idx') THEN
        CREATE INDEX "coffees_origin_idx" ON "coffees" USING btree ("origin");
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'coffees_roast_type_idx') THEN
        CREATE INDEX "coffees_roast_type_idx" ON "coffees" USING btree ("roast_type");
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'coffees_in_stock_idx') THEN
        CREATE INDEX "coffees_in_stock_idx" ON "coffees" USING btree ("in_stock");
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'coffees_roaster_external_id_idx') THEN
        CREATE UNIQUE INDEX "coffees_roaster_external_id_idx" ON "coffees" USING btree ("roaster_id","external_id");
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'roasters_name_idx') THEN
        CREATE INDEX "roasters_name_idx" ON "roasters" USING btree ("name");
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'roasters_is_active_idx') THEN
        CREATE INDEX "roasters_is_active_idx" ON "roasters" USING btree ("is_active");
    END IF;
END
$$;