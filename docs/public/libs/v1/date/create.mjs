import { serializeTheDateRegex, isoDateRegex } from './constants.mjs';
import { isSafeTimestamp } from './isSafeTimestamp.mjs';
import { applyTimezone } from './applyTimezone.mjs';
import { is } from './is.mjs';
import { toNative } from './toNative.mjs';
import { TheDate } from './theDate.mjs';
import { right } from '../either/right/create.mjs';
import { isLeft } from '../either/left/is.mjs';
import { left } from '../either/left/create.mjs';
import { unwrap } from '../common/unwrap.mjs';
import { whenIsLeft } from '../either/left/when.mjs';
import { safeCallback } from '../either/safeCallback.mjs';

const safeDateRegex = /^(?<year>-?[0-9]+)-(?<monthWithDay>[0-1][0-9]-[0-3][0-9])$/;
function create(input, params) {
    if (typeof input === "number") {
        return createFromTimestamp(input);
    }
    if (input instanceof Date) {
        return createFromTimestamp(input.getTime());
    }
    const serializeTheDateMatch = typeof input === "string" && input.match(serializeTheDateRegex);
    if (serializeTheDateMatch) {
        const { value, sign } = serializeTheDateMatch.groups;
        return createFromTimestamp(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    const safeDateMatch = typeof input === "string" && input.match(safeDateRegex);
    if (safeDateMatch) {
        const { year, monthWithDay } = safeDateMatch.groups;
        const date = new Date(`0000-${monthWithDay}T${params?.hour ?? "00"}:${params?.minute ?? "00"}:${params?.second ?? "00"}.${params?.millisecond ?? "000"}Z`);
        date.setUTCFullYear(Number(year));
        return TheDate.new(date.getTime());
    }
    if (typeof input === "object") {
        let inputValueResult = undefined;
        const serializeTheDateMatch = typeof input.value === "string" && input.value.match(serializeTheDateRegex);
        if (serializeTheDateMatch) {
            const { value, sign } = serializeTheDateMatch.groups;
            inputValueResult = createFromTimestamp(Number(sign === "-"
                ? `-${value}`
                : value));
        }
        else if (is(input.value)) {
            inputValueResult = right("date-created", input.value);
        }
        else if (input.value instanceof Date) {
            inputValueResult = createFromTimestamp(input.value.getTime());
        }
        else if (typeof input.value === "number") {
            inputValueResult = createFromTimestamp(input.value);
        }
        else {
            const isoDateMatch = input.value.match(isoDateRegex);
            if (isoDateMatch) {
                const { year, month, date, hour, minute, second, millisecond } = isoDateMatch.groups;
                inputValueResult = createFromTimestamp(Date.UTC(Number(year), Number(month) - 1, Number(date), Number(hour), Number(minute), Number(second), Number(millisecond)));
            }
        }
        if (!inputValueResult || isLeft(inputValueResult)) {
            return inputValueResult || left("date-created-error", null);
        }
        const date = toNative(unwrap(inputValueResult));
        void (input.year && date.setUTCFullYear(input.year));
        void (input.month && date.setMonth(input.month));
        void (input.day && date.setDate(input.day));
        void (input.hour && date.setHours(input.hour));
        void (input.minute && date.setMinutes(input.minute));
        void (input.second && date.setSeconds(input.second));
        void (input.millisecond && date.setMilliseconds(input.millisecond));
        const result = createFromTimestamp(date.getTime());
        if (isLeft(result)) {
            return result;
        }
        const timezone = input.timezone;
        if (!timezone) {
            return result;
        }
        return whenIsLeft(safeCallback(() => right("date-created", applyTimezone(unwrap(result), timezone))), () => left("date-created-error", null));
    }
    return left("date-created-error", null);
}
function createFromTimestamp(input) {
    if (!isSafeTimestamp(input)) {
        return left("date-created-error", null);
    }
    return right("date-created", TheDate.new(input));
}

export { create };
