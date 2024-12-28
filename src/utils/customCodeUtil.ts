import * as _ from "lodash";

let customHandler: Record<string, Function> = {};

export const loadCustomHandlers = (hospitalCodeList: string[]) => {
    try {
        hospitalCodeList.forEach((hospitalCode) => {
            const customHandlers = require('custom-code-' + hospitalCode);
            Object.keys(customHandlers).forEach((handlerKey) => {
                customHandler[getCustomHandlerCode(hospitalCode, handlerKey)] = customHandlers[handlerKey];
            })
        });
    } catch(err) {
        console.log("Got error while loading custom handlers : " + err);
    }

}

export const getCustomHandler = (customHandlerCode: string) => {
    if(_.isEmpty(customHandler[customHandlerCode])) {

    }
} 

export const getCustomHandlerCode = (hospitalCode: string, handlerCode: string): string => {
    return hospitalCode + "__" + handlerCode;
}


