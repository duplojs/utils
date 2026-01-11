'use strict';

/**
 * {@include common/toTransform/index.md}
 */
function toTransform(value) {
    if (typeof value === "string"
        || typeof value === "number"
        || value === null
        || value === undefined) {
        return value;
    }
    else if (value
        && typeof value === "object"
        && "toTransform" in value
        && typeof value.toTransform === "function") {
        return (value.toTransform());
    }
    else if (typeof value === "object"
        && (!value.constructor
            || value.constructor.name === "Object")) {
        return Object.entries(value)
            .reduce((pv, [key, value]) => ({
            ...pv,
            [key]: toTransform(value),
        }), {});
    }
    else if (value instanceof Array
        && value.constructor.name === "Array") {
        return value.map((subValue) => toTransform(subValue));
    }
    else {
        return value;
    }
}

exports.toTransform = toTransform;
