'use strict';

var entries = require('../object/entries.cjs');

function clone(unknownValue) {
    if (!unknownValue) {
        return unknownValue;
    }
    else if (typeof unknownValue !== "object") {
        return unknownValue;
    }
    else if (unknownValue instanceof Array) {
        return unknownValue.map(clone);
    }
    else {
        return entries.entries(unknownValue)
            .reduce((pv, [key, value]) => {
            pv[key] = clone(value);
            return pv;
        }, {});
    }
}

exports.clone = clone;
