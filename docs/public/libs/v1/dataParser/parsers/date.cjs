'use strict';

require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../either/bool/falsy.cjs');
require('../../either/bool/truthy.cjs');
require('../../either/bool/base.cjs');
require('../../either/left/create.cjs');
require('../../either/left/error.cjs');
require('../../either/left/fail.cjs');
require('../../either/kind.cjs');
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
var override = require('../../common/override.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
require('../../date/types/timezone.cjs');
var constants = require('../../date/constants.cjs');
var isSafeTimestamp = require('../../date/isSafeTimestamp.cjs');
require('../../date/toTimestamp.cjs');
require('../../date/createOrThrow.cjs');

const dateKind = kind.createDataParserKind("date");
function date(definition) {
    const self = base.dataParserInit(dateKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            if (data instanceof Date) {
                const timestamp = data.getTime();
                if (!isSafeTimestamp.isSafeTimestamp(timestamp)) {
                    return error.SymbolDataParserErrorIssue;
                }
                const isNegative = timestamp < 0;
                return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
            }
            if (typeof data === "number") {
                if (!isSafeTimestamp.isSafeTimestamp(data)) {
                    return error.SymbolDataParserErrorIssue;
                }
                const isNegative = data < 0;
                return `date${Math.abs(data)}${isNegative ? "-" : "+"}`;
            }
        }
        const theDateMatch = typeof data === "string" && data.match(constants.theDateRegex);
        if (theDateMatch) {
            if (!isSafeTimestamp.isSafeTimestamp(Number(theDateMatch.groups?.value))) {
                return error.SymbolDataParserErrorIssue;
            }
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
    return date.overrideHandler.apply(self);
}
date.overrideHandler = override.createOverride("@duplojs/utils/data-parser/date");

exports.date = date;
exports.dateKind = dateKind;
