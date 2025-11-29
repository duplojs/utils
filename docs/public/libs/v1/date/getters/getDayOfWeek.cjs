'use strict';

require('../types/timezone.cjs');
require('../../either/bool/falsy.cjs');
require('../../either/bool/truthy.cjs');
require('../../either/bool/base.cjs');
require('../../either/left/create.cjs');
require('../../either/left/error.cjs');
require('../../either/left/fail.cjs');
require('../../either/kind.cjs');
require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../common/override.cjs');
require('../../either/right/success.cjs');
require('../../either/right/create.cjs');
require('../../either/right/ok.cjs');
require('../../either/future/success.cjs');
require('../../either/future/error.cjs');
require('../../either/future/base.cjs');
require('../../either/nullable/empty.cjs');
require('../../either/nullable/filled.cjs');
require('../../either/nullable/base.cjs');
require('../../either/nullish/empty.cjs');
require('../../either/nullish/filled.cjs');
require('../../either/nullish/base.cjs');
require('../../either/optional/empty.cjs');
require('../../either/optional/filled.cjs');
require('../../either/optional/base.cjs');
var toNative = require('../toNative.cjs');
require('../toTimestamp.cjs');
require('../createOrThrow.cjs');

const weekdayMapper = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
};
function getDayOfWeek(input, timezone = "UTC") {
    const nativeDate = toNative.toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCDay();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        weekday: "long",
    });
    const weekday = formatter.format(nativeDate);
    return weekdayMapper[weekday];
}

exports.getDayOfWeek = getDayOfWeek;
