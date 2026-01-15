/**
 * {@include common/simpleClone/index.md}
 */
function simpleClone(unknownValue) {
    if (!unknownValue) {
        return unknownValue;
    }
    else if (typeof unknownValue !== "object") {
        return unknownValue;
    }
    else if (unknownValue.constructor === undefined
        || unknownValue.constructor.name === "Object") {
        const result = {};
        for (const key in unknownValue) {
            const desc = Object.getOwnPropertyDescriptor(unknownValue, key);
            if (desc?.set || desc?.get) {
                Object.defineProperty(result, key, desc);
            }
            else {
                result[key] = simpleClone(unknownValue[key]);
            }
        }
        return result;
    }
    else if (unknownValue instanceof Array && unknownValue.constructor.name === "Array") {
        return unknownValue.map(simpleClone);
    }
    else {
        return unknownValue;
    }
}

export { simpleClone };
