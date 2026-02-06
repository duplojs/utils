import { TheDate } from './theDate.mjs';
import { toNative } from './toNative.mjs';

/**
 * {@include date/toISOString/index.md}
 */
function toISOString(input) {
    if (input instanceof TheDate) {
        return input.toISOString();
    }
    return toNative(input).toISOString();
}

export { toISOString };
