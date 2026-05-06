'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var constants = require('../../../date/constants.cjs');
var createTime = require('../../../date/createTime.cjs');
var is = require('../../../either/left/is.cjs');
var unwrap = require('../../../common/unwrap.cjs');
var theTime = require('../../../date/theTime.cjs');
var isSerializedTheTime = require('../../../date/isSerializedTheTime.cjs');
var toTimeValue = require('../../../date/toTimeValue.cjs');
var isSafeTimeValue = require('../../../date/isSafeTimeValue.cjs');
var override = require('../../../common/override.cjs');

const timeKind = kind.createDataParserKind("time");
/**
 * {@include dataParser/classic/time/index.md}
 */
function time(definition) {
    const self = base.dataParserBaseInit(timeKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, error$1, self) => {
        if (self.definition.coerce) {
            if (typeof data === "string" && constants.isoTimeRegex.test(data)) {
                const result = createTime.createTime({ value: data });
                if (is.isLeft(result)) {
                    return error.addIssue(error$1, "time", data, self.definition.errorMessage);
                }
                return unwrap.unwrap(result);
            }
        }
        if (data instanceof theTime.TheTime) {
            return data;
        }
        else if (typeof data === "string" && isSerializedTheTime.isSerializedTheTime(data)) {
            return theTime.TheTime.new(toTimeValue.toTimeValue(data));
        }
        else if (typeof data === "number") {
            if (!isSafeTimeValue.isSafeTimeValue(data)) {
                return error.addIssue(error$1, "time", data, self.definition.errorMessage);
            }
            return theTime.TheTime.new(data);
        }
        return error.addIssue(error$1, "time", data, self.definition.errorMessage);
    }, time.overrideHandler);
    return self;
}
time.overrideHandler = override.createOverride("@duplojs/utils/data-parser/time");

exports.time = time;
exports.timeKind = timeKind;
