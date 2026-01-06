'use strict';

var createTheDate = require('../createTheDate.cjs');
var createTheTime = require('../createTheTime.cjs');
var toTimestamp = require('../toTimestamp.cjs');

function addTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (input) => addTime(input, time);
    }
    const [input, time] = args;
    const timeTimestamp = toTimestamp.toTimestamp(time);
    if (input.startsWith("date")) {
        return createTheDate.createTheDate(toTimestamp.toTimestamp(input) + timeTimestamp);
    }
    return createTheTime.createTheTime(toTimestamp.toTimestamp(input) + timeTimestamp);
}

exports.addTime = addTime;
