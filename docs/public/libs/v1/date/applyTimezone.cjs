'use strict';

var createOrThrow = require('./createOrThrow.cjs');
var getTimezoneOffset = require('./getTimezoneOffset.cjs');
var toTimestamp = require('./toTimestamp.cjs');

function applyTimezone(...args) {
    if (args.length === 1) {
        const [timeZone] = args;
        return (theDate) => applyTimezone(theDate, timeZone);
    }
    const [theDate, timeZone] = args;
    const timestamp = toTimestamp.toTimestamp(theDate);
    return createOrThrow.createOrThrow(timestamp - getTimezoneOffset.getTimezoneOffset(theDate, timeZone));
}

exports.applyTimezone = applyTimezone;
