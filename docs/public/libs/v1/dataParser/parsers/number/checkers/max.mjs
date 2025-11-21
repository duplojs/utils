import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerNumberMaxKind = createDataParserKind("checker-number-max");
function checkerNumberMax(max, definition = {}) {
    return dataParserCheckerInit(checkerNumberMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => value <= self.definition.max ? value : SymbolDataParserErrorIssue);
}

export { checkerNumberMax, checkerNumberMaxKind };
