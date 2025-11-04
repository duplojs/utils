import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const dataParserCheckerArrayMaxKind = createDataParserKind("checker-array-max");
function checkerArrayMax(max, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerArrayMaxKind, {
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

export { checkerArrayMax, dataParserCheckerArrayMaxKind };
