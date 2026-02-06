import { TheDate } from '../theDate.mjs';
import { toNative } from '../toNative.mjs';

/**
 * {@include date/getFirstDayOfWeek/index.md}
 */
function getFirstDayOfWeek(input) {
    const nativeDate = toNative(input);
    const dayOfWeek = nativeDate.getUTCDay();
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    nativeDate.setUTCHours(0, 0, 0, 0);
    nativeDate.setUTCDate(nativeDate.getUTCDate() + daysToMonday);
    return TheDate.new(nativeDate.getTime());
}

export { getFirstDayOfWeek };
