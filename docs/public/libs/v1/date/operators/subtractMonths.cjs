'use strict';

var theDate = require('../theDate.cjs');
var toNative = require('../toNative.cjs');

function subtractMonths(...args) {
    if (args.length === 1) {
        const [month] = args;
        return (input) => subtractMonths(input, month);
    }
    const [input, month] = args;
    const date = toNative.toNative(input);
    date.setUTCMonth(date.getUTCMonth() - month);
    return theDate.TheDate.new(date.getTime());
}

exports.subtractMonths = subtractMonths;
