import '../../../common/stringToBytes.mjs';
import '../../../common/stringToMillisecond.mjs';
import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import '../../../either/bool/falsy.mjs';
import '../../../either/bool/truthy.mjs';
import '../../../either/bool/base.mjs';
import '../../../either/left/create.mjs';
import '../../../either/left/error.mjs';
import '../../../either/left/fail.mjs';
import '../../../either/kind.mjs';
import '../../../either/right/success.mjs';
import '../../../either/right/create.mjs';
import '../../../either/right/ok.mjs';
import '../../../either/future/success.mjs';
import '../../../either/future/error.mjs';
import '../../../either/future/base.mjs';
import '../../../either/nullable/empty.mjs';
import '../../../either/nullable/filled.mjs';
import '../../../either/nullable/base.mjs';
import '../../../either/nullish/empty.mjs';
import '../../../either/nullish/filled.mjs';
import '../../../either/nullish/base.mjs';
import '../../../either/optional/empty.mjs';
import '../../../either/optional/filled.mjs';
import '../../../either/optional/base.mjs';
import { createOverride } from '../../../common/override.mjs';
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
    const self = dataParserInit(stringKind, {
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
    return string.overrideHandler.apply(self);
}
string.overrideHandler = createOverride("@duplojs/utils/data-parser/string");

export { string, stringKind };
