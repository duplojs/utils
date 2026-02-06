'use strict';

var getTimezoneOffset = require('./getTimezoneOffset.cjs');
var toTimestamp = require('./toTimestamp.cjs');
var theDate = require('./theDate.cjs');

function applyTimezone(...args) {
    if (args.length === 1) {
        const [timeZone] = args;
        return (theDate) => applyTimezone(theDate, timeZone);
    }
    const [theDate$1, timeZone] = args;
    const timestamp = toTimestamp.toTimestamp(theDate$1);
    return theDate.TheDate.new(timestamp - getTimezoneOffset.getTimezoneOffset(theDate$1, timeZone));
}

exports.applyTimezone = applyTimezone;
