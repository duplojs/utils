import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerRegexKind = createDataParserKind("checker-regex");
function checkerRegex(regex, definition = {}) {
    return dataParserCheckerInit(checkerRegexKind, {
        definition: {
            ...definition,
            regex,
        },
    }, (data, error, self) => self.definition.regex.test(data)
        ? data
        : addIssue(error, `string with pattern ${self.definition.regex.source.toString()}`, data, self.definition.errorMessage));
}

export { checkerRegex, checkerRegexKind };
