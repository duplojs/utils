'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var isSafeTimestamp = require('../../date/isSafeTimestamp.cjs');
var createTheDate = require('../../date/createTheDate.cjs');
var is = require('../../date/is.cjs');
var override = require('../../common/override.cjs');

const dateKind = kind.createDataParserKind("date");
function date(definition) {
    const self = base.dataParserInit(dateKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            if (data instanceof Date) {
                const timestamp = data.getTime();
                if (!isSafeTimestamp.isSafeTimestamp(timestamp)) {
                    return error.SymbolDataParserErrorIssue;
                }
                return createTheDate.createTheDate(timestamp);
            }
            if (typeof data === "number") {
                if (!isSafeTimestamp.isSafeTimestamp(data)) {
                    return error.SymbolDataParserErrorIssue;
                }
                return createTheDate.createTheDate(data);
            }
            if (typeof data === "string") {
                const date = new Date(data);
                const timestamp = date.getTime();
                if (isSafeTimestamp.isSafeTimestamp(timestamp)) {
                    return createTheDate.createTheDate(timestamp);
                }
            }
        }
        if (typeof data === "string" && is.is(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
    return date.overrideHandler.apply(self);
}
date.overrideHandler = override.createOverride("@duplojs/utils/data-parser/date");

exports.date = date;
exports.dateKind = dateKind;
