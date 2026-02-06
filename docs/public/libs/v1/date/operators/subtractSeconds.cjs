'use strict';

var constants = require('../constants.cjs');
var theDate = require('../theDate.cjs');
var toTimestamp = require('../toTimestamp.cjs');

function subtractSeconds(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (input) => subtractSeconds(input, second);
    }
    const [input, second] = args;
    return theDate.TheDate.new(toTimestamp.toTimestamp(input) - (second * constants.millisecondsInOneSecond));
}

exports.subtractSeconds = subtractSeconds;
