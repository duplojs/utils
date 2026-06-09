import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerRegexKind = createDataParserKind("checker-regex");
class DataParserCheckerRegex extends DataParserCheckerBase.init(checkerRegexKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerRegex);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error, self, dataParser) {
        return self.definition.regex.test(data)
            ? data
            : addIssue(error, `string with pattern ${self.definition.regex.source.toString()}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(regex, definition = {}) {
        return new DataParserCheckerRegex({
            ...definition,
            regex,
        });
    }
}
const checkerRegex = detachObjectMethod(DataParserCheckerRegex, "create");

export { DataParserCheckerRegex, checkerRegex, checkerRegexKind };
