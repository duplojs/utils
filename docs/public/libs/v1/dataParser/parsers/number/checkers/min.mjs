import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';

const dataParserCheckerNumberMinKind = createKind("data-parser-checker-number-min");
function checkerNumberMin(min, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerNumberMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => value >= self.definition.min ? value : SymbolDataParserErrorIssue);
}

export { checkerNumberMin, dataParserCheckerNumberMinKind };
