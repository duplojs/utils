import '../types/timezone.mjs';
import '../../either/bool/falsy.mjs';
import '../../either/bool/truthy.mjs';
import '../../either/bool/base.mjs';
import '../../either/left/create.mjs';
import '../../either/left/error.mjs';
import '../../either/left/fail.mjs';
import '../../either/kind.mjs';
import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../either/right/success.mjs';
import '../../either/right/create.mjs';
import '../../either/right/ok.mjs';
import '../../either/future/success.mjs';
import '../../either/future/error.mjs';
import '../../either/future/base.mjs';
import '../../either/nullable/empty.mjs';
import '../../either/nullable/filled.mjs';
import '../../either/nullable/base.mjs';
import '../../either/nullish/empty.mjs';
import '../../either/nullish/filled.mjs';
import '../../either/nullish/base.mjs';
import '../../either/optional/empty.mjs';
import '../../either/optional/filled.mjs';
import '../../either/optional/base.mjs';
import { toNative } from '../toNative.mjs';
import '../toTimestamp.mjs';
import '../createOrThrow.mjs';

function getWeekOfYear(input, timezone = "UTC") {
    const nativeDate = toNative(input);
    let year = 0;
    let month = 0;
    let day = 0;
    if (timezone === "UTC") {
        year = nativeDate.getUTCFullYear();
        month = nativeDate.getUTCMonth();
        day = nativeDate.getUTCDate();
    }
    else {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            day: "numeric",
            year: "numeric",
            month: "numeric",
        }).formatToParts(nativeDate);
        const partsMap = new Map(parts.map((part) => [part.type, part.value]));
        year = Number(partsMap.get("year"));
        month = Number(partsMap.get("month")) - 1;
        day = Number(partsMap.get("day"));
    }
    const date = new Date(Date.UTC(year, month, day));
    const dayOfWeek = date.getUTCDay() || 7;
    const nearestThursday = day + 4 - dayOfWeek;
    date.setUTCDate(nearestThursday);
    const thursYearStart = Date.UTC(date.getUTCFullYear(), 0, 1);
    const millisecondsDiff = date.getTime() - thursYearStart;
    const daysDiff = Math.floor(millisecondsDiff / 86400000);
    return Math.ceil((daysDiff + 1) / 7);
}

export { getWeekOfYear };
