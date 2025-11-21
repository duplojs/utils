import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerNumberMinKind = createDataParserKind("checker-number-min");
function checkerNumberMin(min, definition = {}) {
    return dataParserCheckerInit(checkerNumberMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => value >= self.definition.min ? value : SymbolDataParserErrorIssue);
}

export { checkerNumberMin, checkerNumberMinKind };
