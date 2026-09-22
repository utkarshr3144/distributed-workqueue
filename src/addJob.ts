import { connection } from "./connection.js";
import { Job } from "bullmq";
import { taskQueue } from "./queue.js";

async function addJob() {
    const job = await taskQueue.add("send-email",{
        to: "user@example.com",
        subject: "Welcome!!",
        message: "Welcome to our app"
});
console.log("job added", job.id);
}

addJob();