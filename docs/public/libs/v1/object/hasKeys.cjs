'use strict';

function hasKeys(...args) {
    if (args.length === 1) {
        const [keys] = args;
        return (partialObject) => hasKeys(partialObject, keys);
    }
    const [partialObject, keys] = args;
    const formattedKey = keys instanceof Array ? keys : [keys];
    for (const key of formattedKey) {
        if (partialObject[key] === undefined) {
            return false;
        }
    }
    return true;
}

exports.hasKeys = hasKeys;
