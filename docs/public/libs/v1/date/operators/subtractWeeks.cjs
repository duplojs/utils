'use strict';

var constants = require('../constants.cjs');
var createTheDate = require('../createTheDate.cjs');
var toNative = require('../toNative.cjs');

function subtractWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => subtractWeeks(input, week);
    }
    const [input, week] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() - (week * constants.millisecondInOneWeek));
    return createTheDate.createTheDate(date.getTime());
}

exports.subtractWeeks = subtractWeeks;
