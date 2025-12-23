import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerArrayMinKind = createDataParserKind("checker-array-min");
function checkerArrayMin(min, definition = {}) {
    return dataParserCheckerInit(checkerArrayMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (data, self) => {
        if (data.length < self.definition.min) {
            return SymbolDataParserErrorIssue;
        }
        return data;
    });
}

export { checkerArrayMin, checkerArrayMinKind };
