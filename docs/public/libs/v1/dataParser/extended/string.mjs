import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserString } from '../parsers/string/index.mjs';
import { checkerStringMin } from '../parsers/string/checkers/min.mjs';
import { checkerStringMax } from '../parsers/string/checkers/max.mjs';
import { checkerRegex } from '../parsers/string/checkers/regex.mjs';
import { checkerEmail } from '../parsers/string/checkers/email.mjs';
import { checkerUrl } from '../parsers/string/checkers/url.mjs';
import { checkerUuid } from '../parsers/string/checkers/uuid.mjs';

class DataParserStringExtended extends DataParserBaseExtended.initExtended(DataParserString) {
    get classConstructor() {
        return this.checkConstructor(DataParserStringExtended);
    }
    /**
     * {@include dataParser/extended/string/min/index.md}
     */
    min(min, definition) {
        return this.addChecker(checkerStringMin(min, definition));
    }
    /**
     * {@include dataParser/extended/string/max/index.md}
     */
    max(max, definition) {
        return this.addChecker(checkerStringMax(max, definition));
    }
    /**
     * {@include dataParser/extended/string/regex/index.md}
     */
    regex(regex, definition) {
        return this.addChecker(checkerRegex(regex, definition));
    }
    /**
     * {@include dataParser/extended/string/index.md}
     */
    static create(definition) {
        return new DataParserStringExtended(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/extended/string/index.md}
 */
const string = detachObjectMethod(DataParserStringExtended, "create");
/**
 * {@include dataParser/extended/email/index.md}
 */
function email(definition) {
    return string({
        checkers: [checkerEmail(definition)],
    });
}
/**
 * {@include dataParser/extended/url/index.md}
 */
function url(definition) {
    return string({
        checkers: [checkerUrl(definition)],
    });
}
/**
 * {@include dataParser/extended/uuid/index.md}
 */
function uuid(definition) {
    return string({
        checkers: [checkerUuid(definition)],
    });
}

export { DataParserStringExtended, email, string, url, uuid };
