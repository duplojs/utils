import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';

const dataParserCheckerNumberMaxKind = createKind("data-parser-checker-number-max");
function checkerNumberMax(max, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerNumberMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => value <= self.definition.max ? value : SymbolDataParserErrorIssue);
}

export { checkerNumberMax, dataParserCheckerNumberMaxKind };
