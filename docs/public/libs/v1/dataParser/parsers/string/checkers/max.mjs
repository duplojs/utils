import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerStringMaxKind = createDataParserKind("checker-string-max");
class DataParserCheckerStringMax extends DataParserCheckerBase.init(checkerStringMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerStringMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error, self, dataParser) {
        return data.length <= self.definition.max
            ? data
            : addIssue(error, `string.length <= ${self.definition.max}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(max, definition = {}) {
        return new DataParserCheckerStringMax({
            ...definition,
            max,
        });
    }
}
const checkerStringMax = detachObjectMethod(DataParserCheckerStringMax, "create");

export { DataParserCheckerStringMax, checkerStringMax, checkerStringMaxKind };
