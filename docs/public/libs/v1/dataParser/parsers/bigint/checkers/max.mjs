import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const dataParserCheckerBigIntMaxKind = createDataParserKind("checker-bigint-max");
function checkerBigIntMax(max, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerBigIntMaxKind, {
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

export { checkerBigIntMax, dataParserCheckerBigIntMaxKind };
