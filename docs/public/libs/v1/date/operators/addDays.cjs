'use strict';

var toNative = require('../toNative.cjs');
var constants = require('../constants.cjs');
var createTheDate = require('../createTheDate.cjs');

function addDays(...args) {
    if (args.length === 1) {
        const [day] = args;
        return (input) => addDays(input, day);
    }
    const [input, day] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() + (day * constants.millisecondsInOneDay));
    return createTheDate.createTheDate(date.getTime());
}

exports.addDays = addDays;
