import { Worker } from "@temporalio/worker";

export const runWorker = async () => {
    const worker = await Worker.create({
        // workflowsPath: require.resolve('../') --> in case you have multiple workslows files inside one folder, give that folder path
        workflowsPath: require('../workflows/hmsWorkflow'),
        activities: require('../activities/activities'),
        taskQueue: process.env.TASK_QUEUE || "appointment-queue"
    });

    console.log("Worker started.");
    await worker.run();
}