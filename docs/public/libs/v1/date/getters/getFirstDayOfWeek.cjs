'use strict';

var toNative = require('../toNative.cjs');

function getFirstDayOfWeek(input) {
    const nativeDate = toNative.toNative(input);
    const dayOfWeek = nativeDate.getUTCDay();
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    nativeDate.setUTCHours(0, 0, 0, 0);
    nativeDate.setUTCDate(nativeDate.getUTCDate() + daysToMonday);
    const timestamp = nativeDate.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.getFirstDayOfWeek = getFirstDayOfWeek;
