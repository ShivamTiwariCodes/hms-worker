import { proxyActivities } from "@temporalio/workflow";
import { processEvent } from "../activities/activities";
import { CustomArgs } from 'hms-core-sdk/dist/interfaces/CustomArgs';
import { UserServiceFactory } from 'hms-sdk-impl/dist/serviceFactories/UserServiceFactory';
import { AppointmentServiceFactory } from 'hms-sdk-impl/dist/serviceFactories/AppointmentServiceFactory'

const activities = proxyActivities({
    startToCloseTimeout: "1 minute"
});

export const hmsWorkflow = async (args: any): Promise<any> => {
    console.log("HMS workflow is recieved ...");
    return await processEvent(getCustomArgs(args));
}

const getCustomArgs = (args: any): CustomArgs<any> => {
    return new CustomArgs(
        "",
        args, 
        UserServiceFactory(),
        AppointmentServiceFactory()
    )
}
