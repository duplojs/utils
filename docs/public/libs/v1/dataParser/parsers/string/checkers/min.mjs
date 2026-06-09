import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerStringMinKind = createDataParserKind("checker-string-min");
class DataParserCheckerStringMin extends DataParserCheckerBase.init(checkerStringMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerStringMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error, self, dataParser) {
        return data.length >= self.definition.min
            ? data
            : addIssue(error, `string.length >= ${self.definition.min}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(min, definition = {}) {
        return new DataParserCheckerStringMin({
            ...definition,
            min,
        });
    }
}
const checkerStringMin = detachObjectMethod(DataParserCheckerStringMin, "create");

export { DataParserCheckerStringMin, checkerStringMin, checkerStringMinKind };
