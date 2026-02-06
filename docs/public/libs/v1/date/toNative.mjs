import { TheDate } from './theDate.mjs';
import { toTimestamp } from './toTimestamp.mjs';

/**
 * {@include date/toNative/index.md}
 */
function toNative(input) {
    if (input instanceof TheDate) {
        return input.toNative();
    }
    const timestamp = toTimestamp(input);
    return new Date(timestamp);
}

export { toNative };
