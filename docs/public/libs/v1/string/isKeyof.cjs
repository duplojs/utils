'use strict';

function isKeyof(...args) {
    if (args.length === 1) {
        const [obj] = args;
        return (key) => isKeyof(key, obj);
    }
    const [key, obj] = args;
    return obj[key] !== undefined;
}

exports.isKeyof = isKeyof;
