import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const dataParserCheckerStringMaxKind = createDataParserKind("checker-string-max");
function checkerStringMax(max, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerStringMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => value.length <= self.definition.max ? value : SymbolDataParserErrorIssue);
}

export { checkerStringMax, dataParserCheckerStringMaxKind };
