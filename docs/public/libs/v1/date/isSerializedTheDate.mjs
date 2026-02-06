import { serializeTheDateRegex } from './constants.mjs';
import { isSafeTimestamp } from './isSafeTimestamp.mjs';

/**
 * {@include date/isSerializedTheDate/index.md}
 */
function isSerializedTheDate(input) {
    const serializeTheDateMatch = input.match(serializeTheDateRegex);
    if (serializeTheDateMatch) {
        const { value, sign } = serializeTheDateMatch.groups;
        return isSafeTimestamp(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    return false;
}

export { isSerializedTheDate };
