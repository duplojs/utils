import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerArrayMaxKind = createDataParserKind("checker-array-max");
class DataParserCheckerArrayMax extends DataParserCheckerBase.init(checkerArrayMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerArrayMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error, self, dataParser) {
        return data.length <= self.definition.max
            ? data
            : addIssue(error, `array.length <= ${self.definition.max}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    static create(max, definition = {}) {
        return new DataParserCheckerArrayMax({
            ...definition,
            max,
        });
    }
}
const checkerArrayMax = detachObjectMethod(DataParserCheckerArrayMax, "create");

export { DataParserCheckerArrayMax, checkerArrayMax, checkerArrayMaxKind };
