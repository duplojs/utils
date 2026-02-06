'use strict';

var theDate = require('./theDate.cjs');
var toTimestamp = require('./toTimestamp.cjs');

function closestTo(...args) {
    if (typeof args[0] === "string" || args[0] instanceof theDate.TheDate) {
        const [target, params] = args;
        return (input) => closestTo(input, target, params);
    }
    const [input, target, params] = args;
    const { tieBreaker } = params ?? {};
    const targetTimestamp = toTimestamp.toTimestamp(target);
    let closest = undefined;
    let smallestDiff = Number.POSITIVE_INFINITY;
    for (const value of input) {
        const valueTimestamp = toTimestamp.toTimestamp(value);
        if (tieBreaker === "favorPast" && valueTimestamp > targetTimestamp) {
            continue;
        }
        if (tieBreaker === "favorFuture" && valueTimestamp < targetTimestamp) {
            continue;
        }
        const distance = Math.abs(valueTimestamp - targetTimestamp);
        if (distance < smallestDiff) {
            smallestDiff = distance;
            if (value instanceof theDate.TheDate) {
                closest = value;
            }
            closest = theDate.TheDate.new(valueTimestamp);
        }
    }
    return closest;
}

exports.closestTo = closestTo;
