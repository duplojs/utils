import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerStringRegexKind = createDataParserKind("checker-string-regex");
function checkerStringRegex(regex, definition = {}) {
    return dataParserCheckerInit(checkerStringRegexKind, {
        definition: {
            ...definition,
            regex,
        },
    }, (value, error, self) => self.definition.regex.test(value)
        ? value
        : addIssue(error, `string with pattern ${self.definition.regex.source.toString()}`, value, self.definition.errorMessage));
}

export { checkerStringRegex, checkerStringRegexKind };
