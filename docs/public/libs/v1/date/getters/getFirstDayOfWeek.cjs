'use strict';

var theDate = require('../theDate.cjs');
var toNative = require('../toNative.cjs');

/**
 * {@include date/getFirstDayOfWeek/index.md}
 */
function getFirstDayOfWeek(input) {
    const nativeDate = toNative.toNative(input);
    const dayOfWeek = nativeDate.getUTCDay();
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    nativeDate.setUTCHours(0, 0, 0, 0);
    nativeDate.setUTCDate(nativeDate.getUTCDate() + daysToMonday);
    return theDate.TheDate.new(nativeDate.getTime());
}

exports.getFirstDayOfWeek = getFirstDayOfWeek;
