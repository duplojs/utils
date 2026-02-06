'use strict';

var constants = require('../constants.cjs');
var theDate = require('../theDate.cjs');
var toTimestamp = require('../toTimestamp.cjs');

function subtractDays(...args) {
    if (args.length === 1) {
        const [day] = args;
        return (input) => subtractDays(input, day);
    }
    const [input, day] = args;
    return theDate.TheDate.new(toTimestamp.toTimestamp(input) - (day * constants.millisecondsInOneDay));
}

exports.subtractDays = subtractDays;
