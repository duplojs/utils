import '../../../common/stringToBytes.mjs';
import '../../../common/stringToMillisecond.mjs';
import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import '../../../either/bool/falsy.mjs';
import '../../../either/bool/truthy.mjs';
import '../../../either/bool/base.mjs';
import '../../../either/left/create.mjs';
import '../../../either/left/error.mjs';
import '../../../either/left/fail.mjs';
import '../../../either/kind.mjs';
import '../../../either/right/success.mjs';
import '../../../either/right/create.mjs';
import '../../../either/right/ok.mjs';
import '../../../either/future/success.mjs';
import '../../../either/future/error.mjs';
import '../../../either/future/base.mjs';
import '../../../either/nullable/empty.mjs';
import '../../../either/nullable/filled.mjs';
import '../../../either/nullable/base.mjs';
import '../../../either/nullish/empty.mjs';
import '../../../either/nullish/filled.mjs';
import '../../../either/nullish/base.mjs';
import '../../../either/optional/empty.mjs';
import '../../../either/optional/filled.mjs';
import '../../../either/optional/base.mjs';
import { createOverride } from '../../../common/override.mjs';
import { dataParserInit, SymbolDataParserError } from '../../base.mjs';
import { SymbolDataParserErrorIssue, setErrorPath, popErrorPath } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { findRecordRequiredKey } from './findRecordRequiredKey.mjs';
export { findRecordRequiredKeyOnTemplateLiteralPart } from './findRecordRequiredKey.mjs';

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
