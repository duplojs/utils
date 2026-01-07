'use strict';

var constants = require('../constants.cjs');
var createTheDate = require('../createTheDate.cjs');
var toNative = require('../toNative.cjs');

function subtractDays(...args) {
    if (args.length === 1) {
        const [day] = args;
        return (input) => subtractDays(input, day);
    }
    const [input, day] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() - (day * constants.millisecondsInOneDay));
    return createTheDate.createTheDate(date.getTime());
}

exports.subtractDays = subtractDays;
