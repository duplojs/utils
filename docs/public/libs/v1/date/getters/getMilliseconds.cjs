'use strict';

var toNative = require('../toNative.cjs');

function getMilliseconds(input) {
    const nativeDate = toNative.toNative(input);
    return nativeDate.getUTCMilliseconds();
}

exports.getMilliseconds = getMilliseconds;
