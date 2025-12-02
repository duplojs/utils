import { dataParserInit, SymbolDataParserError } from '../../base.mjs';
import { SymbolDataParserErrorIssue, setErrorPath, popErrorPath } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { findRecordRequiredKey } from './findRecordRequiredKey.mjs';
export { findRecordRequiredKeyOnTemplateLiteralPart } from './findRecordRequiredKey.mjs';
import { createOverride } from '../../../common/override.mjs';

const recordKind = createDataParserKind("record");
function record(key, value, definition) {
    const self = dataParserInit(recordKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            key,
            value,
            requireKey: findRecordRequiredKey(key),
        },
    }, {
        sync: (data, error, self) => {
            if (!data
                || typeof data !== "object"
                || data instanceof Array) {
                return SymbolDataParserErrorIssue;
            }
            let output = {};
            const currentIndexPath = error.currentPath.length;
            for (const key in data) {
                setErrorPath(error, key, currentIndexPath);
                const resultKey = self
                    .definition
                    .key
                    .exec(key, error);
                if (resultKey === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                const resultValue = self
                    .definition
                    .value
                    .exec(data[key], error);
                if (resultValue === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                if (output !== SymbolDataParserError) {
                    output[resultKey] = resultValue;
                }
            }
            popErrorPath(error);
            if (output === SymbolDataParserError) {
                return output;
            }
            if (self.definition.requireKey
                && self.definition.requireKey.length !== Object.keys(output).length) {
                return SymbolDataParserErrorIssue;
            }
            return output;
        },
        async: async (data, error, self) => {
            if (!data
                || typeof data !== "object"
                || data instanceof Array) {
                return SymbolDataParserErrorIssue;
            }
            let output = {};
            const currentIndexPath = error.currentPath.length;
            for (const key in data) {
                setErrorPath(error, key, currentIndexPath);
                const resultKey = await self
                    .definition
                    .key
                    .asyncExec(key, error);
                if (resultKey === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                const resultValue = await self
                    .definition
                    .value
                    .asyncExec(data[key], error);
                if (resultValue === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                if (output !== SymbolDataParserError) {
                    output[resultKey] = resultValue;
                }
            }
            popErrorPath(error);
            if (output === SymbolDataParserError) {
                return output;
            }
            if (self.definition.requireKey
                && self.definition.requireKey.length !== Object.keys(output).length) {
                return SymbolDataParserErrorIssue;
            }
            return output;
        },
    });
    return record.overrideHandler.apply(self);
}
record.overrideHandler = createOverride("@duplojs/utils/data-parser/record");

export { findRecordRequiredKey, record, recordKind };
