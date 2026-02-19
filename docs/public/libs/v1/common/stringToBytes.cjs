'use strict';

var isKeyof = require('../string/isKeyof.cjs');
var errorKindNamespace = require('./errorKindNamespace.cjs');
var kind = require('./kind.cjs');

/* eslint-disable id-length */
class InvalidBytesInStringError extends kind.kindHeritage("invalid-bytes-in-string-error", errorKindNamespace.createErrorKind("missing-builder-methods-error"), Error) {
    input;
    constructor(input) {
        super({}, [`Invalid Input: ${input}`]);
        this.input = input;
    }
}
const parseRegExp = /(?<rawValue>[0-9.]+)(?<unit>b|kb|mb|gb|tb|pb)/;
const unitMapper = {
    b: 1,
    kb: 1 << 10,
    mb: 1 << 20,
    gb: 1 << 30,
    tb: Math.pow(1024, 4),
    pb: Math.pow(1024, 5),
};
/**
 * {@include common/stringToBytes/index.md}
 */
function stringToBytes(bytesInString) {
    if (typeof bytesInString === "number") {
        return bytesInString;
    }
    const regExpResults = parseRegExp.exec(bytesInString);
    const { rawValue, unit } = regExpResults?.groups ?? {};
    const value = parseFloat(rawValue ?? "");
    if (isNaN(value) || !unit || !isKeyof.isKeyof(unit, unitMapper)) {
        throw new InvalidBytesInStringError(bytesInString);
    }
    return Math.floor(unitMapper[unit] * value);
}

exports.InvalidBytesInStringError = InvalidBytesInStringError;
exports.stringToBytes = stringToBytes;
