'use strict';

var theDate = require('../theDate.cjs');
var toNative = require('../toNative.cjs');

function subtractYears(...args) {
    if (args.length === 1) {
        const [year] = args;
        return (input) => subtractYears(input, year);
    }
    const [input, year] = args;
    const date = toNative.toNative(input);
    date.setUTCFullYear(date.getUTCFullYear() - year);
    return theDate.TheDate.new(date.getTime());
}

exports.subtractYears = subtractYears;
