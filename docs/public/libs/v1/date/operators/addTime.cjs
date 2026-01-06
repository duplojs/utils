'use strict';

var createTheDate = require('../createTheDate.cjs');
var createTheTime = require('../createTheTime.cjs');
var constants = require('../constants.cjs');
var toTimestamp = require('../toTimestamp.cjs');
var is = require('../is.cjs');

function timeToTimestamp(input) {
    const match = input.match(constants.theTimeRegex);
    const { value, sign } = match.groups;
    return Number(sign === "-" ? `-${value}` : value);
}
function addTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (input) => addTime(input, time);
    }
    const [input, time] = args;
    const timeTimestamp = timeToTimestamp(time);
    if (is.is(input)) {
        return createTheDate.createTheDate(toTimestamp.toTimestamp(input) + timeTimestamp);
    }
    return createTheTime.createTheTime(timeToTimestamp(input) + timeTimestamp);
}

exports.addTime = addTime;
