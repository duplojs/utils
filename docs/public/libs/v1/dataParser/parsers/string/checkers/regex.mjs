import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerStringRegexKind = createDataParserKind("checker-string-regex");
function checkerStringRegex(regex, definition = {}) {
    return dataParserCheckerInit(checkerStringRegexKind, {
        definition: {
            ...definition,
            regex,
        },
    }, (value, self) => self.definition.regex.test(value)
        ? value
        : SymbolDataParserErrorIssue);
}

export { checkerStringRegex, checkerStringRegexKind };
