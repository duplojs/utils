import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerBigIntMinKind = createDataParserKind("checker-bigint-min");
function checkerBigIntMin(min, definition = {}) {
    return dataParserCheckerInit(checkerBigIntMinKind, {
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

export { checkerBigIntMin, checkerBigIntMinKind };
