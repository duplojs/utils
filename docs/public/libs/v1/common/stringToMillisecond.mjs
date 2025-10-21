import { isKeyof } from '../string/isKeyof.mjs';

/* eslint-disable id-length */
const kind = "kind-invalid-millisecond-in-string-error";
class InvalidMillisecondInStringError extends Error {
    input;
    constructor(input) {
        super(`Invalid Input: ${input}`);
        this.input = input;
    }
    [kind] = null;
    static instanceof(value) {
        return typeof value === "object"
            && value?.constructor?.name === "InvalidMillisecondInStringError"
            && kind in value;
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
function stringToMillisecond(millisecondInString, ...millisecondInStrings) {
    if (typeof millisecondInString === "number") {
        return millisecondInString;
    }
    const result = parseRegExp.exec(millisecondInString);
    const { rawValue, unit } = result?.groups ?? {};
    const value = parseFloat(rawValue ?? "");
    if (isNaN(value) || !unit || !isKeyof(unit, unitMapper)) {
        throw new InvalidMillisecondInStringError(millisecondInString);
    }
    const millisecond = Math.floor(value * unitMapper[unit]);
    const [otherMillisecondInString, ...restMillisecondInStrings] = millisecondInStrings;
    if (otherMillisecondInString) {
        return millisecond + stringToMillisecond(otherMillisecondInString, ...restMillisecondInStrings);
    }
    return millisecond;
}

export { InvalidMillisecondInStringError, stringToMillisecond };
