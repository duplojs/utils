'use strict';

var theDate = require('../theDate.cjs');
var toTimestamp = require('../toTimestamp.cjs');

function subtractMilliseconds(...args) {
    if (args.length === 1) {
        const [millisecond] = args;
        return (input) => subtractMilliseconds(input, millisecond);
    }
    const [input, millisecond] = args;
    return theDate.TheDate.new(toTimestamp.toTimestamp(input) - millisecond);
}

exports.subtractMilliseconds = subtractMilliseconds;
