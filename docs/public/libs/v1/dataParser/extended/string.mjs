import { dataParserExtendedInit } from '../baseExtended.mjs';
import { string as string$1 } from '../parsers/string/index.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../base.mjs';
import '../../pattern/result.mjs';
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
