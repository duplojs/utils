import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';

const dataParserCheckerArrayMaxKind = createKind("data-parser-checker-array-max");
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
