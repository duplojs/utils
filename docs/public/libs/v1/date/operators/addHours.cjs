'use strict';

var constants = require('../constants.cjs');
var theDate = require('../theDate.cjs');
var toTimestamp = require('../toTimestamp.cjs');

function addHours(...args) {
    if (args.length === 1) {
        const [hour] = args;
        return (input) => addHours(input, hour);
    }
    const [input, hour] = args;
    return theDate.TheDate.new(toTimestamp.toTimestamp(input) + (hour * constants.millisecondInOneHour));
}

exports.addHours = addHours;
