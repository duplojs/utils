'use strict';

var wrapValue = require('../common/wrapValue.cjs');

function entries(object) {
    return Object.entries(object)
        .filter(([key]) => !key.startsWith(wrapValue.keyWrappedValue));
}

exports.entries = entries;
