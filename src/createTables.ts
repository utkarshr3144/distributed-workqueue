import { createJobsTable } from "./db.js";

await createJobsTable();

console.log("jobs table created");
process.exit(0);