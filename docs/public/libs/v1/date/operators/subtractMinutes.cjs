'use strict';

var constants = require('../constants.cjs');
var createTheDate = require('../createTheDate.cjs');
var toNative = require('../toNative.cjs');

function subtractMinutes(...args) {
    if (args.length === 1) {
        const [minute] = args;
        return (input) => subtractMinutes(input, minute);
    }
    const [input, minute] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() - (minute * constants.millisecondInOneMinute));
    return createTheDate.createTheDate(date.getTime());
}

exports.subtractMinutes = subtractMinutes;
