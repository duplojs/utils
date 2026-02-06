import { toNative } from '../toNative.mjs';

/**
 * {@include date/getMilliseconds/index.md}
 */
function getMilliseconds(input) {
    const date = toNative(input);
    return date.getUTCMilliseconds();
}

export { getMilliseconds };
