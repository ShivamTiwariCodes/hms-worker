"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runWorker = void 0;
const worker_1 = require("@temporalio/worker");
const runWorker = async () => {
    const worker = await worker_1.Worker.create({
        // workflowsPath: require.resolve('../') --> in case you have multiple workslows files inside one folder, give that folder path
        workflowsPath: require('../workflows/hmsWorkflow'),
        activities: require('../activities/activities'),
        taskQueue: process.env.TASK_QUEUE || "appointment-queue"
    });
    console.log("Worker started.");
    await worker.run();
};
exports.runWorker = runWorker;
