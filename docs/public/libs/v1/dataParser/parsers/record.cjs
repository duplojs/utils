'use strict';

var kind = require('../../common/kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');

const dataParserRecordKind = kind.createKind("data-parser-record");
function record(key, value, definition) {
    return base.dataParserInit(dataParserRecordKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            key,
            value,
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
            return output;
        },
    });
}

exports.dataParserRecordKind = dataParserRecordKind;
exports.record = record;
