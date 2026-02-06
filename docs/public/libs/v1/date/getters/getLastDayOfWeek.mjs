import { TheDate } from '../theDate.mjs';
import { toNative } from '../toNative.mjs';

/**
 * {@include date/getLastDayOfWeek/index.md}
 */
function getLastDayOfWeek(input) {
    const nativeDate = toNative(input);
    const dayOfWeek = nativeDate.getUTCDay();
    const daysToSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    nativeDate.setUTCDate(nativeDate.getUTCDate() + daysToSunday);
    nativeDate.setUTCHours(23, 59, 59, 999);
    return TheDate.new(nativeDate.getTime());
}

export { getLastDayOfWeek };
