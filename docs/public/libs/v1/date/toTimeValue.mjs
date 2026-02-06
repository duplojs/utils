import { makeSafeTimeValue } from './makeSafeTimeValue.mjs';
import { TheTime } from './theTime.mjs';
import { serializeTheTimeRegex } from './constants.mjs';

/**
 * {@include date/toTimeValue/index.md}
 */
function toTimeValue(input) {
    if (input instanceof TheTime) {
        return input.toNative();
    }
    const match = input.match(serializeTheTimeRegex);
    const { value, sign } = match.groups;
    return makeSafeTimeValue(Number(sign === "-"
        ? `-${value}`
        : value));
}

export { toTimeValue };
