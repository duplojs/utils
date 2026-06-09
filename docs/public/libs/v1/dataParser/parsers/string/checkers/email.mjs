import { addIssue } from '../../../error.mjs';
import { string } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerEmailKind = createDataParserKind("checker-email");
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;
class DataParserCheckerEmail extends DataParserCheckerBase.init(checkerEmailKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerEmail);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error, self, dataParser) {
        return self.definition.regex.test(data)
            ? data
            : addIssue(error, "email", data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(definition = {}) {
        return new DataParserCheckerEmail({
            ...definition,
            regex: emailRegex,
        });
    }
}
const checkerEmail = detachObjectMethod(DataParserCheckerEmail, "create");
function email(definition) {
    return string({
        checkers: [checkerEmail(definition)],
    });
}

export { DataParserCheckerEmail, checkerEmail, checkerEmailKind, email };
