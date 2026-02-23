'use strict';

var theDate = require('./theDate.cjs');
var theTime = require('./theTime.cjs');
var toTimestamp = require('./toTimestamp.cjs');
var toTimeValue = require('./toTimeValue.cjs');

function toNative(input) {
    if (input instanceof theDate.TheDate) {
        return input.toNative();
    }
    else if (input instanceof theTime.TheTime) {
        return input.toNative();
    }
    else if (input.startsWith("date")) {
        return new Date(toTimestamp.toTimestamp(input));
    }
    else {
        return toTimeValue.toTimeValue(input);
    }
}

exports.toNative = toNative;
