import { proxyActivities } from "@temporalio/workflow";
import { processEvent } from "../activities/activities";

const activities = proxyActivities({
    startToCloseTimeout: "1 minute"
});

export const hmsWorkflow = async (args: any): Promise<any> => {
    console.log("HMS workflow is recieved ...");
    return await processEvent(args);
}
