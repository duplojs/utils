import { TheDate } from '../theDate.mjs';
import { toNative } from '../toNative.mjs';

/**
 * {@include date/getLastDayOfMonth/index.md}
 */
function getLastDayOfMonth(input) {
    const nativeDate = toNative(input);
    nativeDate.setUTCMonth(nativeDate.getUTCMonth() + 1, 0);
    nativeDate.setUTCHours(23, 59, 59, 999);
    return TheDate.new(nativeDate.getTime());
}

export { getLastDayOfMonth };
