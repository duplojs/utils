'use strict';

var constants = require('../constants.cjs');
var theDate = require('../theDate.cjs');
var toTimestamp = require('../toTimestamp.cjs');

function subtractMinutes(...args) {
    if (args.length === 1) {
        const [minute] = args;
        return (input) => subtractMinutes(input, minute);
    }
    const [input, minute] = args;
    return theDate.TheDate.new(toTimestamp.toTimestamp(input) - (minute * constants.millisecondInOneMinute));
}

exports.subtractMinutes = subtractMinutes;
