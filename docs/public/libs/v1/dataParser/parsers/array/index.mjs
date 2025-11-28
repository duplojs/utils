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
export { checkerArrayMin, checkerArrayMinKind } from './checkers/min.mjs';
export { checkerArrayMax, checkerArrayMaxKind } from './checkers/max.mjs';

const arrayKind = createDataParserKind("array");
function array(element, definition) {
    const self = dataParserInit(arrayKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            element,
        },
    }, {
        sync: (data, error, self) => {
            if (!(data instanceof Array)) {
                return SymbolDataParserErrorIssue;
            }
            let output = [];
            const currentIndexPath = error.currentPath.length;
            for (let index = 0; index < data.length; index++) {
                setErrorPath(error, `[${index}]`, currentIndexPath);
                const result = self
                    .definition
                    .element
                    .exec(data[index], error);
                if (result === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                else if (output !== SymbolDataParserError) {
                    output.push(result);
                }
            }
            popErrorPath(error);
            return output;
        },
        async: async (data, error, self) => {
            if (!(data instanceof Array)) {
                return SymbolDataParserErrorIssue;
            }
            let output = [];
            const currentIndexPath = error.currentPath.length;
            for (let index = 0; index < data.length; index++) {
                setErrorPath(error, `[${index}]`, currentIndexPath);
                const result = await self
                    .definition
                    .element
                    .asyncExec(data[index], error);
                if (result === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                else if (output !== SymbolDataParserError) {
                    output.push(result);
                }
            }
            popErrorPath(error);
            return output;
        },
    });
    return array.overrideHandler.apply(self);
}
array.overrideHandler = createOverride("@duplojs/utils/data-parser/array");

export { array, arrayKind };
