'use strict';

var createTheDate = require('../createTheDate.cjs');
var toNative = require('../toNative.cjs');

function addMonths(...args) {
    if (args.length === 1) {
        const [month] = args;
        return (input) => addMonths(input, month);
    }
    const [input, month] = args;
    const date = toNative.toNative(input);
    date.setUTCMonth(date.getUTCMonth() + month);
    return createTheDate.createTheDate(date.getTime());
}

exports.addMonths = addMonths;
