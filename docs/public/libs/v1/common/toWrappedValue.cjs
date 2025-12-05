'use strict';

var wrapValue = require('./wrapValue.cjs');

function toWrappedValue(value) {
    return wrapValue.isWrappedValue(value)
        ? value
        : wrapValue.wrapValue(value);
}

exports.toWrappedValue = toWrappedValue;
