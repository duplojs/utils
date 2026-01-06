'use strict';

var constants = require('../constants.cjs');
var createTheDate = require('../createTheDate.cjs');
var toNative = require('../toNative.cjs');

function addSeconds(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (input) => addSeconds(input, second);
    }
    const [input, second] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() + (second * constants.millisecondsInOneSecond));
    return createTheDate.createTheDate(date.getTime());
}

exports.addSeconds = addSeconds;
