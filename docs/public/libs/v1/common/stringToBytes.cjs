'use strict';

var isKeyof = require('../string/isKeyof.cjs');

/* eslint-disable id-length */
const kind = "kind-invalid-bytes-in-string-error";
class InvalidBytesInStringError extends Error {
    input;
    constructor(input) {
        super(`Invalid Input: ${input}`);
        this.input = input;
    }
    [kind] = null;
    static instanceof(value) {
        return typeof value === "object"
            && value?.constructor?.name === "InvalidBytesInStringError"
            && kind in value;
    }
}
const parseRegExp = /(?<rawValue>[0-9.]+)(?<unit>b|kb|mb|gb|tb|pd)/;
const unitMapper = {
    b: 1,
    kb: 1 << 10,
    mb: 1 << 20,
    gb: 1 << 30,
    tb: Math.pow(1024, 4),
    pb: Math.pow(1024, 5),
};
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
