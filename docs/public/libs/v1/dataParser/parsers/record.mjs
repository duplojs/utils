import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { SymbolDataParserErrorIssue, setErrorPath, popErrorPath } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';

const recordKind = createDataParserKind("record");
function record(key, value, definition) {
    return dataParserInit(recordKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            key,
            value,
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
            return output;
        },
    });
}

export { record, recordKind };
