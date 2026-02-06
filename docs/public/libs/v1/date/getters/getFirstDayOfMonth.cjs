'use strict';

var theDate = require('../theDate.cjs');
var toNative = require('../toNative.cjs');

/**
 * {@include date/getFirstDayOfMonth/index.md}
 */
function getFirstDayOfMonth(input) {
    const nativeDate = toNative.toNative(input);
    nativeDate.setUTCDate(1);
    nativeDate.setUTCHours(0, 0, 0, 0);
    return theDate.TheDate.new(nativeDate.getTime());
}

exports.getFirstDayOfMonth = getFirstDayOfMonth;
