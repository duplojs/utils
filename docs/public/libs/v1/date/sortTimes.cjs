'use strict';

var createTheTime = require('./createTheTime.cjs');
var toTimeValue = require('./toTimeValue.cjs');

function sortTimes(...args) {
    if (args.length === 1) {
        const [type] = args;
        return (array) => sortTimes(array, type);
    }
    const [array, type] = args;
    return array
        .map(toTimeValue.toTimeValue)
        .sort(type === "DSC"
        ? (first, second) => second - first
        : (first, second) => first - second)
        .map(createTheTime.createTheTime);
}

exports.sortTimes = sortTimes;
