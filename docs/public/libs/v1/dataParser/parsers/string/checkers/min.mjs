import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';

const dataParserCheckerStringMinKind = createKind("data-parser-checker-string-min");
function checkerStringMin(min, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerStringMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => value.length >= self.definition.min ? value : SymbolDataParserErrorIssue);
}

export { checkerStringMin, dataParserCheckerStringMinKind };
