'use strict';

var wrapValue = require('../common/wrapValue.cjs');

function keys(object) {
    return Object.keys(object)
        .filter((key) => !key.startsWith(wrapValue.keyWrappedValue));
}

exports.keys = keys;
