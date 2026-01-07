'use strict';

var createTheDate = require('../createTheDate.cjs');
var createTheTime = require('../createTheTime.cjs');
var toTimestamp = require('../toTimestamp.cjs');
var toTimeValue = require('../toTimeValue.cjs');

function addTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (input) => addTime(input, time);
    }
    const [input, time] = args;
    const timeTimestamp = toTimeValue.toTimeValue(time);
    if (input.startsWith("date")) {
        return createTheDate.createTheDate(toTimestamp.toTimestamp(input) + timeTimestamp);
    }
    return createTheTime.createTheTime(toTimeValue.toTimeValue(input) + timeTimestamp);
}

exports.addTime = addTime;
