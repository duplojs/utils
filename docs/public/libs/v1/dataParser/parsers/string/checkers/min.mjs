import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerStringMinKind = createDataParserKind("checker-string-min");
function checkerStringMin(min, definition = {}) {
    return dataParserCheckerInit(checkerStringMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, self) => value.length >= self.definition.min ? value : SymbolDataParserErrorIssue);
}

export { checkerStringMin, checkerStringMinKind };
