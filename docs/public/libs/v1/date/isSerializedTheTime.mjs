import { serializeTheTimeRegex } from './constants.mjs';
import { isSafeTimeValue } from './isSafeTimeValue.mjs';

/**
 * {@include date/isSerializedTheTime/index.md}
 */
function isSerializedTheTime(input) {
    const serializeTheTimeMatch = input.match(serializeTheTimeRegex);
    if (serializeTheTimeMatch) {
        const { value, sign } = serializeTheTimeMatch.groups;
        return isSafeTimeValue(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    return false;
}

export { isSerializedTheTime };
