import { entries } from '../../../object/entries.mjs';
import { pipe } from '../../../common/pipe.mjs';
import '../../../common/stringToBytes.mjs';
import '../../../common/stringToMillisecond.mjs';
import { forward } from '../../../common/forward.mjs';
import { memo } from '../../../common/memo.mjs';
import { filter } from '../../../array/filter.mjs';
import { map } from '../../../array/map.mjs';
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
import { dataParserInit, SymbolDataParserError, dataParserKind } from '../../base.mjs';
import { SymbolDataParserErrorIssue, setErrorPath, popErrorPath } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';

const objectKind = createDataParserKind("object");
function object(shape, definition) {
    const self = dataParserInit(objectKind, {
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
    return object.overrideHandler.apply(self);
}
object.overrideHandler = createOverride("@duplojs/utils/data-parser/object");

export { object, objectKind };
