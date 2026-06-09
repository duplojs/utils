import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerNumberMaxKind = createDataParserKind("checker-number-max");
class DataParserCheckerNumberMax extends DataParserCheckerBase.init(checkerNumberMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerNumberMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error, self, dataParser) {
        const isValid = self.definition.exclusive
            ? value < self.definition.max
            : value <= self.definition.max;
        if (isValid) {
            return value;
        }
        return addIssue(error, `number ${self.definition.exclusive ? "<" : "<="} ${self.definition.max}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(max, definition = {}) {
        return new DataParserCheckerNumberMax({
            ...definition,
            exclusive: definition.exclusive ?? false,
            max,
        });
    }
}
const checkerNumberMax = detachObjectMethod(DataParserCheckerNumberMax, "create");

export { DataParserCheckerNumberMax, checkerNumberMax, checkerNumberMaxKind };
