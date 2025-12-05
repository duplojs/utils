import { toNative } from '../toNative.mjs';

function getMilliseconds(input) {
    const nativeDate = toNative(input);
    return nativeDate.getUTCMilliseconds();
}

export { getMilliseconds };
