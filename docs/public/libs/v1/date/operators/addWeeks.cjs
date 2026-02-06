'use strict';

var constants = require('../constants.cjs');
var theDate = require('../theDate.cjs');
var toTimestamp = require('../toTimestamp.cjs');

function addWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => addWeeks(input, week);
    }
    const [input, week] = args;
    const timestamp = input instanceof theDate.TheDate
        ? input.getTime()
        : toTimestamp.toTimestamp(input);
    return theDate.TheDate.new(timestamp + (week * constants.millisecondInOneWeek));
}

exports.addWeeks = addWeeks;
