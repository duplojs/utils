import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';

const dataParserCheckerStringMaxKind = createKind("data-parser-checker-string-max");
function checkerStringMax(max, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerStringMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, self) => value.length <= self.definition.max ? value : SymbolDataParserErrorIssue);
}

export { checkerStringMax, dataParserCheckerStringMaxKind };
