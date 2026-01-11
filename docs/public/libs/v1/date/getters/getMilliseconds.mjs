import { toNative } from '../toNative.mjs';

/**
 * {@include date/getMilliseconds/index.md}
 */
function getMilliseconds(input) {
    const nativeDate = toNative(input);
    return nativeDate.getUTCMilliseconds();
}

export { getMilliseconds };
