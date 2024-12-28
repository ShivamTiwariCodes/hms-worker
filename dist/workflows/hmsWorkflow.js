"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmsWorkflow = void 0;
const workflow_1 = require("@temporalio/workflow");
const activities_1 = require("../activities/activities");
const activities = (0, workflow_1.proxyActivities)({
    startToCloseTimeout: "1 minute"
});
const hmsWorkflow = async (args) => {
    console.log("HMS workflow is recieved ...");
    return await (0, activities_1.processEvent)(args);
};
exports.hmsWorkflow = hmsWorkflow;
