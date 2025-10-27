import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';

const dataParserCheckerArrayMinKind = createKind("data-parser-checker-array-min");
function checkerArrayMin(min, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerArrayMinKind, {
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

export { checkerArrayMin, dataParserCheckerArrayMinKind };
