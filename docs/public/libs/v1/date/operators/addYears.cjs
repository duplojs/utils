'use strict';

var theDate = require('../theDate.cjs');
var toNative = require('../toNative.cjs');

function addYears(...args) {
    if (args.length === 1) {
        const [year] = args;
        return (input) => addYears(input, year);
    }
    const [input, year] = args;
    const date = toNative.toNative(input);
    date.setUTCFullYear(date.getUTCFullYear() + year);
    return theDate.TheDate.new(date.getTime());
}

exports.addYears = addYears;
