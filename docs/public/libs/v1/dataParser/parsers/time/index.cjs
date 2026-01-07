'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var isSafeTimeValue = require('../../../date/isSafeTimeValue.cjs');
var createTheTime = require('../../../date/createTheTime.cjs');
var constants = require('../../../date/constants.cjs');
var createTime = require('../../../date/createTime.cjs');
var is = require('../../../either/left/is.cjs');
var unwrap = require('../../../common/unwrap.cjs');
var isTime = require('../../../date/isTime.cjs');
var override = require('../../../common/override.cjs');

const timeKind = kind.createDataParserKind("time");
function time(definition) {
    const self = base.dataParserInit(timeKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            if (typeof data === "number") {
                if (!isSafeTimeValue.isSafeTimeValue(data)) {
                    return error.SymbolDataParserErrorIssue;
                }
                return createTheTime.createTheTime(data);
            }
            if (typeof data === "string" && constants.isoTimeRegex.test(data)) {
                const result = createTime.createTime({ value: data });
                if (is.isLeft(result)) {
                    return error.SymbolDataParserErrorIssue;
                }
                return unwrap.unwrap(result);
            }
        }
        if (typeof data === "string" && isTime.isTime(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
    return time.overrideHandler.apply(self);
}
time.overrideHandler = override.createOverride("@duplojs/utils/data-parser/time");

exports.time = time;
exports.timeKind = timeKind;
