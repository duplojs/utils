import { TheDate } from '../theDate.mjs';
import { toNative } from '../toNative.mjs';

/**
 * {@include date/getFirstDayOfMonth/index.md}
 */
function getFirstDayOfMonth(input) {
    const nativeDate = toNative(input);
    nativeDate.setUTCDate(1);
    nativeDate.setUTCHours(0, 0, 0, 0);
    return TheDate.new(nativeDate.getTime());
}

export { getFirstDayOfMonth };
