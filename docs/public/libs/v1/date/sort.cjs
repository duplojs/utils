'use strict';

var createOrThrow = require('./createOrThrow.cjs');
var toTimestamp = require('./toTimestamp.cjs');

function sort(...args) {
    if (args.length === 1) {
        const [type] = args;
        return (array) => sort(array, type);
    }
    const [array, type] = args;
    return array
        .map(toTimestamp.toTimestamp)
        .sort(type === "DSC"
        ? (first, second) => second - first
        : (first, second) => first - second)
        .map(createOrThrow.createOrThrow);
}

exports.sort = sort;
