import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerBigIntMaxKind = createDataParserKind("checker-bigint-max");
class DataParserCheckerBigIntMax extends DataParserCheckerBase.init(checkerBigIntMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerBigIntMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error, self, dataParser) {
        if (value > self.definition.max) {
            return addIssue(error, `bigint <= ${self.definition.max}n`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
        }
        return value;
    }
    static create(max, definition = {}) {
        return new DataParserCheckerBigIntMax({
            ...definition,
            max,
        });
    }
}
const checkerBigIntMax = detachObjectMethod(DataParserCheckerBigIntMax, "create");

export { DataParserCheckerBigIntMax, checkerBigIntMax, checkerBigIntMaxKind };
