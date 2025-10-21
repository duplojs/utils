'use strict';

var wrapValue = require('./wrapValue.cjs');

function unwrap(anyValue) {
    return anyValue && typeof anyValue === "object" && wrapValue.keyWrappedValue in anyValue
        ? anyValue[wrapValue.keyWrappedValue]
        : anyValue;
}

exports.unwrap = unwrap;
