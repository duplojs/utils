import { toNative } from './toNative.mjs';

/**
 * {@include date/toISOString/index.md}
 */
function toISOString(input) {
    const date = toNative(input);
    return date.toISOString();
}

export { toISOString };
