'use strict';

var wrapValue = require('./wrapValue.cjs');

/**
 * {@include common/toWrappedValue/index.md}
 */
function toWrappedValue(value) {
    return wrapValue.isWrappedValue(value)
        ? value
        : wrapValue.wrapValue(value);
}

exports.toWrappedValue = toWrappedValue;
