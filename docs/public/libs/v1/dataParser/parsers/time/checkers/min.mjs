import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { greaterTime } from '../../../../date/operators/greaterTime.mjs';

const checkerTimeMinKind = createDataParserKind("checker-time-min");
function checkerTimeMin(min, definition = {}) {
    return dataParserCheckerInit(checkerTimeMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => greaterTime(value, self.definition.min) ? value : SymbolDataParserErrorIssue);
}

export { checkerTimeMin, checkerTimeMinKind };
