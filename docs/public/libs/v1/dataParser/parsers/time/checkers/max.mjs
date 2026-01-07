import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { lessTime } from '../../../../date/operators/lessTime.mjs';

const checkerTimeMaxKind = createDataParserKind("checker-time-max");
function checkerTimeMax(max, definition = {}) {
    return dataParserCheckerInit(checkerTimeMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => lessTime(value, self.definition.max) ? value : SymbolDataParserErrorIssue);
}

export { checkerTimeMax, checkerTimeMaxKind };
