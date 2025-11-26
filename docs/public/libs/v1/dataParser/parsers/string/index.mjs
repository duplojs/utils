import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
export { checkerUrl, checkerUrlKind, url } from './checkers/url.mjs';
export { checkerEmail, checkerEmailKind, email } from './checkers/email.mjs';
export { checkerStringMax, checkerStringMaxKind } from './checkers/max.mjs';
export { checkerStringMin, checkerStringMinKind } from './checkers/min.mjs';
export { checkerStringRegex, checkerStringRegexKind } from './checkers/regex.mjs';

const stringKind = createDataParserKind("string");
function string(definition) {
    return dataParserInit(stringKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = String(data);
            }
            catch { }
        }
        if (typeof data === "string") {
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
}

export { string, stringKind };
