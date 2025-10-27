import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';

const dataParserCheckerBigIntMaxKind = createKind("data-parser-checker-bigint-max");
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
