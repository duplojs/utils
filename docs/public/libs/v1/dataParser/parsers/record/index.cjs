'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var findRecordRequiredKey = require('./findRecordRequiredKey.cjs');
var override = require('../../../common/override.cjs');

const recordKind = kind.createDataParserKind("record");
/**
 * {@include dataParser/classic/record/index.md}
 */
function record(key, value, definition) {
    const self = base.dataParserInit(recordKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        key,
        value,
        requireKey: findRecordRequiredKey.findRecordRequiredKey(key),
    }, {
        sync: (data, error$1, self) => {
            if (!data
                || typeof data !== "object"
                || data instanceof Array) {
                return error.SymbolDataParserErrorIssue;
            }
            let output = {};
            const currentIndexPath = error$1.currentPath.length;
            for (const key in data) {
                error.setErrorPath(error$1, key, currentIndexPath);
                const resultKey = self
                    .definition
                    .key
                    .exec(key, error$1);
                if (resultKey === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                const resultValue = self
                    .definition
                    .value
                    .exec(data[key], error$1);
                if (resultValue === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                if (output !== base.SymbolDataParserError) {
                    output[resultKey] = resultValue;
                }
            }
            void (currentIndexPath !== error$1.currentPath.length && error.popErrorPath(error$1));
            if (output === base.SymbolDataParserError) {
                return output;
            }
            if (self.definition.requireKey
                && self.definition.requireKey.length !== Object.keys(output).length) {
                return error.SymbolDataParserErrorIssue;
            }
            return output;
        },
        async: async (data, error$1, self) => {
            if (!data
                || typeof data !== "object"
                || data instanceof Array) {
                return error.SymbolDataParserErrorIssue;
            }
            let output = {};
            const currentIndexPath = error$1.currentPath.length;
            for (const key in data) {
                error.setErrorPath(error$1, key, currentIndexPath);
                const resultKey = await self
                    .definition
                    .key
                    .asyncExec(key, error$1);
                if (resultKey === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                const resultValue = await self
                    .definition
                    .value
                    .asyncExec(data[key], error$1);
                if (resultValue === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                if (output !== base.SymbolDataParserError) {
                    output[resultKey] = resultValue;
                }
            }
            void (currentIndexPath !== error$1.currentPath.length && error.popErrorPath(error$1));
            if (output === base.SymbolDataParserError) {
                return output;
            }
            if (self.definition.requireKey
                && self.definition.requireKey.length !== Object.keys(output).length) {
                return error.SymbolDataParserErrorIssue;
            }
            return output;
        },
    }, record.overrideHandler);
    return self;
}
record.overrideHandler = override.createOverride("@duplojs/utils/data-parser/record");

exports.findRecordRequiredKey = findRecordRequiredKey.findRecordRequiredKey;
exports.findRecordRequiredKeyOnTemplateLiteralPart = findRecordRequiredKey.findRecordRequiredKeyOnTemplateLiteralPart;
exports.record = record;
exports.recordKind = recordKind;
