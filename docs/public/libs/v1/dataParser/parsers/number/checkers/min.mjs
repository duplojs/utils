import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerNumberMinKind = createDataParserKind("checker-number-min");
class DataParserCheckerNumberMin extends DataParserCheckerBase.init(checkerNumberMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerNumberMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error, self, dataParser) {
        const isValid = self.definition.exclusive
            ? value > self.definition.min
            : value >= self.definition.min;
        if (isValid) {
            return value;
        }
        return addIssue(error, `number ${self.definition.exclusive ? ">" : ">="} ${self.definition.min}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    static create(min, definition = {}) {
        return new DataParserCheckerNumberMin({
            ...definition,
            exclusive: definition.exclusive ?? false,
            min,
        });
    }
}
const checkerNumberMin = detachObjectMethod(DataParserCheckerNumberMin, "create");

export { DataParserCheckerNumberMin, checkerNumberMin, checkerNumberMinKind };
