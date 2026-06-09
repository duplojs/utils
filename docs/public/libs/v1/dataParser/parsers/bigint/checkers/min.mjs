import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerBigIntMinKind = createDataParserKind("checker-bigint-min");
class DataParserCheckerBigIntMin extends DataParserCheckerBase.init(checkerBigIntMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerBigIntMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error, self, dataParser) {
        if (value < self.definition.min) {
            return addIssue(error, `bigint >= ${self.definition.min}n`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
        }
        return value;
    }
    static create(min, definition = {}) {
        return new DataParserCheckerBigIntMin({
            ...definition,
            min,
        });
    }
}
const checkerBigIntMin = detachObjectMethod(DataParserCheckerBigIntMin, "create");

export { DataParserCheckerBigIntMin, checkerBigIntMin, checkerBigIntMinKind };
