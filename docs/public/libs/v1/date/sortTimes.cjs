'use strict';

var createTheTime = require('./createTheTime.cjs');
var toTimestamp = require('./toTimestamp.cjs');

function sortTimes(...args) {
    if (args.length === 1) {
        const [type] = args;
        return (array) => sortTimes(array, type);
    }
    const [array, type] = args;
    return array
        .map(toTimestamp.toTimestamp)
        .sort(type === "DSC"
        ? (first, second) => second - first
        : (first, second) => first - second)
        .map(createTheTime.createTheTime);
}

exports.sortTimes = sortTimes;
