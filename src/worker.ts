import { Job, Worker } from "bullmq";
import { connection } from "./connection.js";

export const worker = new Worker(
    "tasks",
    async(job: Job) => {
        console.log("Processing job", job.name);
        console.log("Job data", job.data);

        return { success: true };
    },
    { connection }
);

worker.on("completed", (job) => {
    console.log(`Job ${job.id} completed`);
} );

worker.on("failed", (job, err) => {
    console.log(`Job ${job?.id} failed:`, err.message)
});