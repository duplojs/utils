'use strict';

var constants = require('./constants.cjs');
var isSafeTimestamp = require('./isSafeTimestamp.cjs');
require('../either/bool/falsy.cjs');
require('../either/bool/truthy.cjs');
require('../either/bool/base.cjs');
var create$1 = require('../either/left/create.cjs');
require('../either/left/error.cjs');
require('../either/left/fail.cjs');
require('../either/kind.cjs');
require('../common/stringToBytes.cjs');
require('../common/stringToMillisecond.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
require('../common/override.cjs');
require('../either/right/success.cjs');
var create$2 = require('../either/right/create.cjs');
require('../either/right/ok.cjs');
require('../either/future/success.cjs');
require('../either/future/error.cjs');
require('../either/future/base.cjs');
require('../either/nullable/empty.cjs');
require('../either/nullable/filled.cjs');
require('../either/nullable/base.cjs');
require('../either/nullish/empty.cjs');
require('../either/nullish/filled.cjs');
require('../either/nullish/base.cjs');
require('../either/optional/empty.cjs');
require('../either/optional/filled.cjs');
require('../either/optional/base.cjs');

const safeDateRegex = /^(?<year>-?[0-9]+)-(?<monthWithDay>[0-1][0-9]-[0-3][0-9])$/;
function create(input, params) {
    if (input instanceof Date) {
        const timestamp = input.getTime();
        if (!isSafeTimestamp.isSafeTimestamp(timestamp)) {
            return create$1.left("date-created-error", null);
        }
        const isNegative = timestamp < 0;
        return create$2.right("date-created", `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`);
    }
    if (typeof input === "number") {
        if (!isSafeTimestamp.isSafeTimestamp(input)) {
            return create$1.left("date-created-error", null);
        }
        const isNegative = input < 0;
        return create$2.right("date-created", `date${Math.abs(input)}${isNegative ? "-" : "+"}`);
    }
    const theDateMatch = typeof input === "string" && input.match(constants.theDateRegex);
    if (theDateMatch) {
        const { value, sign } = theDateMatch.groups;
        const magnitude = Number(value);
        const timestamp = sign === "-" ? -magnitude : magnitude;
        if (!isSafeTimestamp.isSafeTimestamp(timestamp)) {
            return create$1.left("date-created-error", null);
        }
        return create$2.right("date-created", input);
    }
    const safeDateMatch = typeof input === "string" && input.match(safeDateRegex);
    if (safeDateMatch) {
        const { year, monthWithDay } = safeDateMatch.groups;
        const date = new Date(`0000-${monthWithDay}T${params?.hour ?? "00"}:${params?.minute ?? "00"}:${params?.second ?? "00"}.${params?.millisecond ?? "000"}Z`);
        date.setUTCFullYear(Number(year));
        const timestamp = date.getTime();
        if (!isSafeTimestamp.isSafeTimestamp(timestamp)) {
            return "date0+";
        }
        const isNegative = timestamp < 0;
        return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
    }
    return create$1.left("date-created-error", null);
}

exports.create = create;
