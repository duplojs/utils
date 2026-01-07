'use strict';

var createTheDate = require('../createTheDate.cjs');
var toNative = require('../toNative.cjs');

function subtractMilliseconds(...args) {
    if (args.length === 1) {
        const [millisecond] = args;
        return (input) => subtractMilliseconds(input, millisecond);
    }
    const [input, millisecond] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() - millisecond);
    return createTheDate.createTheDate(date.getTime());
}

exports.subtractMilliseconds = subtractMilliseconds;
