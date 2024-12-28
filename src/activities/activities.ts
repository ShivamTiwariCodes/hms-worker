import { IAppointment } from "hms-core-sdk/dist/interfaces/IAppointment";
import { CustomArgs } from "hms-core-sdk/dist/interfaces/CustomArgs";

export async function processEvent(customArgs: CustomArgs<any>): Promise<any> {
  const { eventType } = customArgs.args;

  switch(eventType) {
    case "user":
        return processUserEvent(customArgs);
    case "appointment":
        return processAppointmentEvent(customArgs);
    default:
        return {err: "Invalid event type given. Given event Type : " + eventType}         
  }
}

const processUserEvent = (args: any): Promise<any> => {
    console.log("User acitivity is started ... ");
    const { action } = args;
    return new Promise((resolve, reject) => {
        resolve("");
    });
}

const processAppointmentEvent = (args: any): Promise<any> => {
    console.log("Appointment acitivity is started ... ");
    const { action } = args;
    return new Promise((resolve, reject) => {
        resolve("");
    })
}

