'use strict';

function transformProperty(...args) {
    if (args.length === 2) {
        const [key, transform] = args;
        return (obj) => transformProperty(obj, key, transform);
    }
    const [obj, key, transform] = args;
    return {
        ...obj,
        [key]: transform(obj[key]),
    };
}

exports.transformProperty = transformProperty;
