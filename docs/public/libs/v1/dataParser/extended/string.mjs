import { dataParserExtendedInit } from '../baseExtended.mjs';
import { string as string$1 } from '../parsers/string/index.mjs';
import '../parsers/object.mjs';
import '../parsers/number/index.mjs';
import '../parsers/date.mjs';
import '../parsers/literal.mjs';
import '../parsers/union.mjs';
import '../parsers/array/index.mjs';
import '../parsers/bigint/index.mjs';
import '../parsers/tuple.mjs';
import '../parsers/transform.mjs';
import '../parsers/nil.mjs';
import '../parsers/boolean.mjs';
import '../parsers/empty.mjs';
import '../parsers/templateLiteral/index.mjs';
import '../parsers/pipe.mjs';
import '../parsers/optional.mjs';
import '../parsers/nullable.mjs';
import '../parsers/lazy.mjs';
import '../parsers/unknown.mjs';
import '../parsers/record/index.mjs';
import '../parsers/refine.mjs';
import '../parsers/recover.mjs';
import { checkerEmail } from '../parsers/string/checkers/email.mjs';
import { checkerUrl } from '../parsers/string/checkers/url.mjs';
import { checkerStringRegex } from '../parsers/string/checkers/regex.mjs';
import { checkerStringMax } from '../parsers/string/checkers/max.mjs';
import { checkerStringMin } from '../parsers/string/checkers/min.mjs';

function string(definition) {
    return dataParserExtendedInit(string$1(definition), {
        min(self, min, definition) {
            return self.addChecker(checkerStringMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerStringMax(max, definition));
        },
        regex(self, regex, definition) {
            return self.addChecker(checkerStringRegex(regex, definition));
        },
    });
}
function email(definition) {
    return string({
        checkers: [checkerEmail(definition)],
    });
}
function url(definition) {
    return string({
        checkers: [checkerUrl(definition)],
    });
}

export { email, string, url };
