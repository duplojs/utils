import { dataParserInit, SymbolDataParserError } from '../../base.mjs';
import { SymbolDataParserErrorIssue, setErrorPath, popErrorPath } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { findRecordRequiredKey } from './findRecordRequiredKey.mjs';
export { findRecordRequiredKeyOnTemplateLiteralPart } from './findRecordRequiredKey.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { map } from '../../../array/map.mjs';
import { entry } from '../../../object/entry.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';
import { createOverride } from '../../../common/override.mjs';

const recordKind = createDataParserKind("record");
/**
 * {@include dataParser/classic/record/index.md}
 */
function record(key, value, definition) {
    const requireKey = findRecordRequiredKey(key);
    const self = dataParserInit(recordKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        key,
        value,
        requireKey,
        baseData: pipe(requireKey, map((key) => entry(key, undefined)), fromEntries),
    }, {
        sync: (data, error, self) => {
            if (!data
                || typeof data !== "object"
                || data instanceof Array) {
                return SymbolDataParserErrorIssue;
            }
            let output = {};
            const fromData = {
                ...self.definition.baseData,
                ...data,
            };
            const currentIndexPath = error.currentPath.length;
            for (const key in fromData) {
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
                    .exec(fromData[key], error);
                if (resultValue === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                if (output !== SymbolDataParserError) {
                    output[resultKey] = resultValue;
                }
            }
            void (currentIndexPath !== error.currentPath.length && popErrorPath(error));
            if (output === SymbolDataParserError) {
                return output;
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
            const fromData = {
                ...self.definition.baseData,
                ...data,
            };
            const currentIndexPath = error.currentPath.length;
            for (const key in fromData) {
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
                    .asyncExec(fromData[key], error);
                if (resultValue === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                if (output !== SymbolDataParserError) {
                    output[resultKey] = resultValue;
                }
            }
            void (currentIndexPath !== error.currentPath.length && popErrorPath(error));
            if (output === SymbolDataParserError) {
                return output;
            }
            return output;
        },
        isAsynchronous: (self) => self.definition.value.isAsynchronous(),
    }, record.overrideHandler);
    return self;
}
record.overrideHandler = createOverride("@duplojs/utils/data-parser/record");

export { findRecordRequiredKey, record, recordKind };
