'use strict';

var constants = require('./constants.cjs');
var isSafeTimestamp = require('./isSafeTimestamp.cjs');
var applyTimezone = require('./applyTimezone.cjs');
var is = require('./is.cjs');
var toNative = require('./toNative.cjs');
var createTheDate = require('./createTheDate.cjs');
var create$1 = require('../either/right/create.cjs');
var is$1 = require('../either/left/is.cjs');
var create$2 = require('../either/left/create.cjs');
var unwrap = require('../common/unwrap.cjs');
var when = require('../either/left/when.cjs');
var safeCallback = require('../either/safeCallback.cjs');

const safeDateRegex = /^(?<year>-?[0-9]+)-(?<monthWithDay>[0-1][0-9]-[0-3][0-9])$/;
function create(input, params) {
    if (typeof input === "number") {
        return createFromTimestamp(input);
    }
    if (input instanceof Date) {
        return createFromTimestamp(input.getTime());
    }
    if (typeof input === "string" && is.is(input)) {
        return create$1.right("date-created", input);
    }
    const safeDateMatch = typeof input === "string" && input.match(safeDateRegex);
    if (safeDateMatch) {
        const { year, monthWithDay } = safeDateMatch.groups;
        const date = new Date(`0000-${monthWithDay}T${params?.hour ?? "00"}:${params?.minute ?? "00"}:${params?.second ?? "00"}.${params?.millisecond ?? "000"}Z`);
        date.setUTCFullYear(Number(year));
        const timestamp = date.getTime();
        return `date${Math.abs(timestamp)}${timestamp < 0 ? "-" : "+"}`;
    }
    if (typeof input === "object") {
        let inputValueResult = undefined;
        if (input.value instanceof Date) {
            inputValueResult = createFromTimestamp(input.value.getTime());
        }
        else if (typeof input.value === "number") {
            inputValueResult = createFromTimestamp(input.value);
        }
        else if (is.is(input.value)) {
            inputValueResult = create$1.right("date-created", input.value);
        }
        else {
            const isoDateMatch = input.value.match(constants.isoDateRegex);
            if (isoDateMatch) {
                const { year, month, date, hour, minute, second, millisecond } = isoDateMatch.groups;
                inputValueResult = createFromTimestamp(Date.UTC(Number(year), Number(month) - 1, Number(date), Number(hour), Number(minute), Number(second), Number(millisecond)));
            }
        }
        if (!inputValueResult || is$1.isLeft(inputValueResult)) {
            return inputValueResult || create$2.left("date-created-error", null);
        }
        const date = toNative.toNative(unwrap.unwrap(inputValueResult));
        void (input.year && date.setUTCFullYear(input.year));
        void (input.month && date.setMonth(input.month));
        void (input.day && date.setDate(input.day));
        void (input.hour && date.setHours(input.hour));
        void (input.minute && date.setMinutes(input.minute));
        void (input.second && date.setSeconds(input.second));
        void (input.millisecond && date.setMilliseconds(input.millisecond));
        const result = createFromTimestamp(date.getTime());
        if (is$1.isLeft(result)) {
            return result;
        }
        const timezone = input.timezone;
        if (!timezone) {
            return result;
        }
        return when.whenIsLeft(safeCallback.safeCallback(() => create$1.right("date-created", applyTimezone.applyTimezone(unwrap.unwrap(result), timezone))), () => create$2.left("date-created-error", null));
    }
    return create$2.left("date-created-error", null);
}
function createFromTimestamp(input) {
    if (!isSafeTimestamp.isSafeTimestamp(input)) {
        return create$2.left("date-created-error", null);
    }
    return create$1.right("date-created", createTheDate.createTheDate(input));
}

exports.create = create;
