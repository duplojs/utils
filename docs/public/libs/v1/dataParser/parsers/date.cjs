'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var isSafeTimestamp = require('../../date/isSafeTimestamp.cjs');
var constants = require('../../date/constants.cjs');
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
