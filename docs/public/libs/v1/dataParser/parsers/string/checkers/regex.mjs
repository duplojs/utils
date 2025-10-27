import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';

const dataParserCheckerStringRegexKind = createKind("data-parser-checker-string-regex");
function checkerStringRegex(regex, definition = {}) {
    return dataParserCheckerInit(dataParserCheckerStringRegexKind, {
        definition: {
            ...definition,
            regex,
        },
    }, (value, self) => self.definition.regex.test(value)
        ? value
        : SymbolDataParserErrorIssue);
}

export { checkerStringRegex, dataParserCheckerStringRegexKind };
