import { toNative } from '../toNative.mjs';

/**
 * {@include date/getFirstDayOfMonth/index.md}
 */
function getFirstDayOfMonth(input) {
    const nativeDate = toNative(input);
    nativeDate.setUTCDate(1);
    nativeDate.setUTCHours(0, 0, 0, 0);
    const timestamp = nativeDate.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { getFirstDayOfMonth };
