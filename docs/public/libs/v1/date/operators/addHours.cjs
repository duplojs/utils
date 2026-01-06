'use strict';

var constants = require('../constants.cjs');
var createTheDate = require('../createTheDate.cjs');
var toNative = require('../toNative.cjs');

function addHours(...args) {
    if (args.length === 1) {
        const [hour] = args;
        return (input) => addHours(input, hour);
    }
    const [input, hour] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() + (hour * constants.millisecondInOneHour));
    return createTheDate.createTheDate(date.getTime());
}

exports.addHours = addHours;
