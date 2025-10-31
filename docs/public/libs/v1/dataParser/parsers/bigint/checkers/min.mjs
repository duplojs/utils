import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const dataParserCheckerBigIntMinKind = createDataParserKind("checker-bigint-min");
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
