import { theDateRegex } from './constants.mjs';
import { isSafeTimestamp } from './isSafeTimestamp.mjs';
import '../either/bool/falsy.mjs';
import '../either/bool/truthy.mjs';
import '../either/bool/base.mjs';
import { left } from '../either/left/create.mjs';
import '../either/left/error.mjs';
import '../either/left/fail.mjs';
import '../either/kind.mjs';
import '../common/stringToBytes.mjs';
import '../common/stringToMillisecond.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import '../either/right/success.mjs';
import { right } from '../either/right/create.mjs';
import '../either/right/ok.mjs';
import '../either/future/success.mjs';
import '../either/future/error.mjs';
import '../either/future/base.mjs';
import '../either/nullable/empty.mjs';
import '../either/nullable/filled.mjs';
import '../either/nullable/base.mjs';
import '../either/nullish/empty.mjs';
import '../either/nullish/filled.mjs';
import '../either/nullish/base.mjs';
import '../either/optional/empty.mjs';
import '../either/optional/filled.mjs';
import '../either/optional/base.mjs';

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
