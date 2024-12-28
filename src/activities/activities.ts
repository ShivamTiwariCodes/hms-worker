import { IAppointment } from "hms-core-sdk/dist/interfaces/IAppointment";

export async function processEvent(args: any): Promise<any> {
  const { eventType } = args;

  switch(eventType) {
    case "user":
        return processUserEvent(args);
    case "appointment":
        return processAppointmentEvent(args);
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

