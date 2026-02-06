'use strict';

var theDate = require('../theDate.cjs');
var toNative = require('../toNative.cjs');

/**
 * {@include date/getLastDayOfMonth/index.md}
 */
function getLastDayOfMonth(input) {
    const nativeDate = toNative.toNative(input);
    nativeDate.setUTCMonth(nativeDate.getUTCMonth() + 1, 0);
    nativeDate.setUTCHours(23, 59, 59, 999);
    return theDate.TheDate.new(nativeDate.getTime());
}

exports.getLastDayOfMonth = getLastDayOfMonth;
