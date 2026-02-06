'use strict';

var constants = require('../constants.cjs');
var theDate = require('../theDate.cjs');
var toTimestamp = require('../toTimestamp.cjs');

function subtractWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => subtractWeeks(input, week);
    }
    const [input, week] = args;
    return theDate.TheDate.new(toTimestamp.toTimestamp(input) - (week * constants.millisecondInOneWeek));
}

exports.subtractWeeks = subtractWeeks;
