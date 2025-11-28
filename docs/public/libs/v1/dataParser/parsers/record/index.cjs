'use strict';

require('../../../common/stringToBytes.cjs');
require('../../../common/stringToMillisecond.cjs');
require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
require('../../../either/bool/falsy.cjs');
require('../../../either/bool/truthy.cjs');
require('../../../either/bool/base.cjs');
require('../../../either/left/create.cjs');
require('../../../either/left/error.cjs');
require('../../../either/left/fail.cjs');
require('../../../either/kind.cjs');
require('../../../either/right/success.cjs');
require('../../../either/right/create.cjs');
require('../../../either/right/ok.cjs');
require('../../../either/future/success.cjs');
require('../../../either/future/error.cjs');
require('../../../either/future/base.cjs');
require('../../../either/nullable/empty.cjs');
require('../../../either/nullable/filled.cjs');
require('../../../either/nullable/base.cjs');
require('../../../either/nullish/empty.cjs');
require('../../../either/nullish/filled.cjs');
require('../../../either/nullish/base.cjs');
require('../../../either/optional/empty.cjs');
require('../../../either/optional/filled.cjs');
require('../../../either/optional/base.cjs');
var override = require('../../../common/override.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var findRecordRequiredKey = require('./findRecordRequiredKey.cjs');

const recordKind = kind.createDataParserKind("record");
function record(key, value, definition) {
    const self = base.dataParserInit(recordKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            key,
            value,
            requireKey: findRecordRequiredKey.findRecordRequiredKey(key),
        },
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
            error.popErrorPath(error$1);
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
            error.popErrorPath(error$1);
            if (output === base.SymbolDataParserError) {
                return output;
            }
            if (self.definition.requireKey
                && self.definition.requireKey.length !== Object.keys(output).length) {
                return error.SymbolDataParserErrorIssue;
            }
            return output;
        },
    });
    return record.overrideHandler.apply(self);
}
record.overrideHandler = override.createOverride("@duplojs/utils/data-parser/record");

exports.findRecordRequiredKey = findRecordRequiredKey.findRecordRequiredKey;
exports.findRecordRequiredKeyOnTemplateLiteralPart = findRecordRequiredKey.findRecordRequiredKeyOnTemplateLiteralPart;
exports.record = record;
exports.recordKind = recordKind;
