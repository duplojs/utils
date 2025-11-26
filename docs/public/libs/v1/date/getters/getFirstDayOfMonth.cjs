'use strict';

var toNative = require('../toNative.cjs');

function getFirstDayOfMonth(input) {
    const nativeDate = toNative.toNative(input);
    nativeDate.setUTCDate(1);
    nativeDate.setUTCHours(0, 0, 0, 0);
    const timestamp = nativeDate.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.getFirstDayOfMonth = getFirstDayOfMonth;
