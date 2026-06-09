import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerArrayMinKind = createDataParserKind("checker-array-min");
class DataParserCheckerArrayMin extends DataParserCheckerBase.init(checkerArrayMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerArrayMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error, self, dataParser) {
        return data.length >= self.definition.min
            ? data
            : addIssue(error, `array.length >= ${self.definition.min}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(min, definition = {}) {
        return new DataParserCheckerArrayMin({
            ...definition,
            min,
        });
    }
}
const checkerArrayMin = detachObjectMethod(DataParserCheckerArrayMin, "create");

export { DataParserCheckerArrayMin, checkerArrayMin, checkerArrayMinKind };
