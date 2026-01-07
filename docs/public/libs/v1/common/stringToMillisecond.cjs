'use strict';

var isKeyof = require('../string/isKeyof.cjs');
var kind = require('./kind.cjs');
var errorKindNamespace = require('./errorKindNamespace.cjs');

/* eslint-disable id-length */
class InvalidMillisecondInStringError extends kind.kindHeritage("invalid-millisecond-in-string-error", errorKindNamespace.createErrorKind("missing-builder-methods-error"), Error) {
    input;
    constructor(input) {
        super({}, [`Invalid Input: ${input}`]);
        this.input = input;
    }
}
const unitMapper = {
    ms: 1,
    s: 1000,
    m: 60_000,
    h: 3_600_000,
    d: 86_400_000,
    w: 604_800_000,
};
const parseRegExp = /(?<rawValue>[0-9.]+)(?<unit>ms|s|m|h|d|w)/;
/**
 * {@include common/stringToMillisecond/index.md}
 */
function stringToMillisecond(millisecondInString, ...millisecondInStrings) {
    if (typeof millisecondInString === "number") {
        return millisecondInString;
    }
    const result = parseRegExp.exec(millisecondInString);
    const { rawValue, unit } = result?.groups ?? {};
    const value = parseFloat(rawValue ?? "");
    if (isNaN(value) || !unit || !isKeyof.isKeyof(unit, unitMapper)) {
        throw new InvalidMillisecondInStringError(millisecondInString);
    }
    const millisecond = Math.floor(value * unitMapper[unit]);
    const [otherMillisecondInString, ...restMillisecondInStrings] = millisecondInStrings;
    if (otherMillisecondInString) {
        return millisecond + stringToMillisecond(otherMillisecondInString, ...restMillisecondInStrings);
    }
    return millisecond;
}

exports.InvalidMillisecondInStringError = InvalidMillisecondInStringError;
exports.stringToMillisecond = stringToMillisecond;
