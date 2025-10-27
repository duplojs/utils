import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';

const dataParserCheckerBigIntMinKind = createKind("data-parser-checker-bigint-min");
function checkerBigIntMin(min, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerBigIntMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => {
        if (value < self.definition.min) {
            return SymbolDataParserErrorIssue;
        }
        return value;
    });
}

export { checkerBigIntMin, dataParserCheckerBigIntMinKind };
