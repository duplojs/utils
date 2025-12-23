import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerArrayMaxKind = createDataParserKind("checker-array-max");
function checkerArrayMax(max, definition = {}) {
    return dataParserCheckerInit(checkerArrayMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (data, self) => {
        if (data.length > self.definition.max) {
            return SymbolDataParserErrorIssue;
        }
        return data;
    });
}

export { checkerArrayMax, checkerArrayMaxKind };
