import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const dataParserCheckerNumberMinKind = createDataParserKind("checker-number-min");
function checkerNumberMin(min, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerNumberMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => value >= self.definition.min ? value : SymbolDataParserErrorIssue);
}

export { checkerNumberMin, dataParserCheckerNumberMinKind };
