'use strict';

var theDate = require('../theDate.cjs');
var toNative = require('../toNative.cjs');

function addMonths(...args) {
    if (args.length === 1) {
        const [month] = args;
        return (input) => addMonths(input, month);
    }
    const [input, month] = args;
    const date = toNative.toNative(input);
    date.setUTCMonth(date.getUTCMonth() + month);
    return theDate.TheDate.new(date.getTime());
}

exports.addMonths = addMonths;
