import { theDateRegex } from './constants.mjs';
import { isSafeTimestamp } from './isSafeTimestamp.mjs';
import { left } from '../either/left/create.mjs';
import { right } from '../either/right/create.mjs';

const safeDateRegex = /^(?<year>-?[0-9]+)-(?<monthWithDay>[0-1][0-9]-[0-3][0-9])$/;
function create(input, params) {
    if (input instanceof Date) {
        const timestamp = input.getTime();
        if (!isSafeTimestamp(timestamp)) {
            return left("date-created-error", null);
        }
        const isNegative = timestamp < 0;
        return right("date-created", `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`);
    }
    if (typeof input === "number") {
        if (!isSafeTimestamp(input)) {
            return left("date-created-error", null);
        }
        const isNegative = input < 0;
        return right("date-created", `date${Math.abs(input)}${isNegative ? "-" : "+"}`);
    }
    const theDateMatch = typeof input === "string" && input.match(theDateRegex);
    if (theDateMatch) {
        const { value, sign } = theDateMatch.groups;
        const magnitude = Number(value);
        const timestamp = sign === "-" ? -magnitude : magnitude;
        if (!isSafeTimestamp(timestamp)) {
            return left("date-created-error", null);
        }
        return right("date-created", input);
    }
    const safeDateMatch = typeof input === "string" && input.match(safeDateRegex);
    if (safeDateMatch) {
        const { year, monthWithDay } = safeDateMatch.groups;
        const date = new Date(`0000-${monthWithDay}T${params?.hour ?? "00"}:${params?.minute ?? "00"}:${params?.second ?? "00"}.${params?.millisecond ?? "000"}Z`);
        date.setUTCFullYear(Number(year));
        const timestamp = date.getTime();
        if (!isSafeTimestamp(timestamp)) {
            return "date0+";
        }
        const isNegative = timestamp < 0;
        return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
    }
    return left("date-created-error", null);
}

export { create };
