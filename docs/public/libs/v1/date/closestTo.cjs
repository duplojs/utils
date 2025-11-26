'use strict';

var toTimestamp = require('./toTimestamp.cjs');

function closestTo(...args) {
    if (typeof args[0] === "string") {
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
            closest = value;
        }
    }
    return closest;
}

exports.closestTo = closestTo;
