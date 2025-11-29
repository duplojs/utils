'use strict';

function toJSON(value) {
    if (typeof value === "string"
        || typeof value === "number"
        || value === null
        || value === undefined) {
        return value;
    }
    else if (typeof value === "object"
        && "toJSON" in value
        && typeof value.toJSON === "function") {
        return value.toJSON();
    }
    else if (typeof value === "object"
        && (!value.constructor
            || value.constructor.name === "Object")) {
        return Object
            .entries(value)
            .reduce((pv, [key, value]) => ({
            ...pv,
            [key]: toJSON(value),
        }), {});
    }
    else if (value instanceof Array
        && value.constructor.name === "Array") {
        return value.map(toJSON);
    }
    else {
        return undefined;
    }
}

exports.toJSON = toJSON;
