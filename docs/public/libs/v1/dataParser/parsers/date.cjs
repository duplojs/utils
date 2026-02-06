'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var isSafeTimestamp = require('../../date/isSafeTimestamp.cjs');
var theDate = require('../../date/theDate.cjs');
var isSerializedTheDate = require('../../date/isSerializedTheDate.cjs');
var toTimestamp = require('../../date/toTimestamp.cjs');
var override = require('../../common/override.cjs');

const dateKind = kind.createDataParserKind("date");
/**
 * {@include dataParser/classic/date/index.md}
 */
function date(definition) {
    const self = base.dataParserInit(dateKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            if (typeof data === "number") {
                if (!isSafeTimestamp.isSafeTimestamp(data)) {
                    return error.SymbolDataParserErrorIssue;
                }
                return theDate.TheDate.new(data);
            }
            if (typeof data === "string") {
                const date = new Date(data);
                const timestamp = date.getTime();
                if (isSafeTimestamp.isSafeTimestamp(timestamp)) {
                    return theDate.TheDate.new(timestamp);
                }
            }
        }
        if (data instanceof theDate.TheDate) {
            return data;
        }
        else if (typeof data === "string" && isSerializedTheDate.isSerializedTheDate(data)) {
            return theDate.TheDate.new(toTimestamp.toTimestamp(data));
        }
        else if (data instanceof Date) {
            const timestamp = data.getTime();
            if (!isSafeTimestamp.isSafeTimestamp(timestamp)) {
                return error.SymbolDataParserErrorIssue;
            }
            return theDate.TheDate.new(timestamp);
        }
        return error.SymbolDataParserErrorIssue;
    }, date.overrideHandler);
    return self;
}
date.overrideHandler = override.createOverride("@duplojs/utils/data-parser/date");

exports.date = date;
exports.dateKind = dateKind;
