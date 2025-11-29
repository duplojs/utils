function simpleClone(unknownValue) {
    if (!unknownValue) {
        return unknownValue;
    }
    else if (typeof unknownValue !== "object") {
        return unknownValue;
    }
    else if (unknownValue.constructor === undefined
        || unknownValue.constructor.name === "Object") {
        return Object.entries(unknownValue).reduce((pv, [key, value]) => {
            pv[key] = simpleClone(value);
            return pv;
        }, {});
    }
    else if (unknownValue instanceof Array && unknownValue.constructor.name === "Array") {
        return unknownValue.map(simpleClone);
    }
    else {
        return unknownValue;
    }
}

export { simpleClone };
