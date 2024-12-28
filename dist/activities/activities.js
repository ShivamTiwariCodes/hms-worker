"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processEvent = processEvent;
async function processEvent(args) {
    const { eventType } = args;
    switch (eventType) {
        case "user":
            return processUserEvent(args);
        case "appointment":
            return processAppointmentEvent(args);
        default:
            return { err: "Invalid event type given. Given event Type : " + eventType };
    }
}
const processUserEvent = (args) => {
    console.log("User acitivity is started ... ");
    const { action } = args;
    return new Promise((resolve, reject) => {
        resolve("");
    });
};
const processAppointmentEvent = (args) => {
    console.log("Appointment acitivity is started ... ");
    const { action } = args;
    return new Promise((resolve, reject) => {
        resolve("");
    });
};
