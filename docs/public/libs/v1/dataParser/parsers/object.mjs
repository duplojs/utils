import { entries } from '../../object/entries.mjs';
import { pipe } from '../../common/pipe.mjs';
import { forward } from '../../common/forward.mjs';
import { memo } from '../../common/memo.mjs';
import { filter } from '../../array/filter.mjs';
import { map } from '../../array/map.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { dataParserInit, SymbolDataParserError, dataParserKind } from '../base.mjs';
import { SymbolDataParserErrorIssue, setErrorPath, popErrorPath } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';

const dataParserObjectKind = createDataParserKind("object");
function object(shape, definition) {
    return dataParserInit(dataParserObjectKind, {
        definition: {
            shape,
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            optimizedShape: memo(() => pipe(forward(shape), entries, filter((entry) => dataParserKind.has(entry[1])), map(([key, value]) => ({
                key,
                value,
            })))),
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
            for (const entry of self.definition.optimizedShape.value) {
                setErrorPath(error, entry.key, currentIndexPath);
                const result = entry.value.exec(data[entry.key], error);
                if (result === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                else if (output !== SymbolDataParserError
                    && result !== undefined) {
                    output[entry.key] = result;
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
            for (const entry of self.definition.optimizedShape.value) {
                setErrorPath(error, entry.key, currentIndexPath);
                const result = await entry.value.asyncExec(data[entry.key], error);
                if (result === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                else if (output !== SymbolDataParserError
                    && result !== undefined) {
                    output[entry.key] = result;
                }
            }
            popErrorPath(error);
            return output;
        },
    });
}

export { dataParserObjectKind, object };
