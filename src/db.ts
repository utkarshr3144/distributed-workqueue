import { Pool } from "pg";

export const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "workqueue",
    password: "workqueue",
    database: "workqueue"
});

export async function createJobsTable() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS Jobs (
            id          UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
            type        TEXT            NOT NULL,
            payload     JSONB           NOT NULL,
            status      TEXT            NOT NULL    DEFAULT 'pending',
            attempts    INTEGER         NOT NULL    DEFAULT 0,
            created_at  TIMESTAMPTZ     NOT NULL    DEFAULT NOW(),
            updated_at  TIMESTAMPTZ     NOT NULL    DEFAULT NOW()
        );
    `);
}