'use strict';

var toTimestamp = require('./toTimestamp.cjs');
var theDate = require('./theDate.cjs');

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
        .map(theDate.TheDate.new);
}

exports.sort = sort;
