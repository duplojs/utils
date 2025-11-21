import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerBigIntMaxKind = createDataParserKind("checker-bigint-max");
function checkerBigIntMax(max, definition = {}) {
    return dataParserCheckerInit(checkerBigIntMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => {
        if (value > self.definition.max) {
            return SymbolDataParserErrorIssue;
        }
        return value;
    });
}

export { checkerBigIntMax, checkerBigIntMaxKind };
