import { toNative } from '../toNative.mjs';

function getLastDayOfMonth(input) {
    const nativeDate = toNative(input);
    nativeDate.setUTCMonth(nativeDate.getUTCMonth() + 1, 0);
    nativeDate.setUTCHours(23, 59, 59, 999);
    const timestamp = nativeDate.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

export { getLastDayOfMonth };
