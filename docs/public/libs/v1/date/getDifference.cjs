'use strict';

var makeSafeTimeValue = require('./makeSafeTimeValue.cjs');
var theTime = require('./theTime.cjs');
var toTimestamp = require('./toTimestamp.cjs');

function getDifference(...args) {
    if (args.length === 1) {
        const [reference] = args;
        return (input) => getDifference(input, reference);
    }
    const inputTimestamp = toTimestamp.toTimestamp(args[0]);
    const referenceTimestamp = toTimestamp.toTimestamp(args[1]);
    return theTime.TheTime.new(makeSafeTimeValue.makeSafeTimeValue(inputTimestamp - referenceTimestamp));
}

exports.getDifference = getDifference;
