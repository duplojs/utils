import { toTimestamp } from './toTimestamp.mjs';

/**
 * {@include date/toNative/index.md}
 */
function toNative(input) {
    const timestamp = toTimestamp(input);
    return new Date(timestamp);
}

export { toNative };
