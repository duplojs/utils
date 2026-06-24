import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';
import { greaterTime } from '../../../../date/operators/greaterTime.mjs';

const checkerTimeMinKind = createDataParserKind("checker-time-min");
class DataParserCheckerTimeMin extends DataParserCheckerBase.init(checkerTimeMinKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerTimeMin);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error, self, dataParser) {
        return greaterTime(value, self.definition.min)
            ? value
            : addIssue(error, `time >= ${self.definition.min.toString()}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    /**
     * {@include dataParser/classic/checkerTimeMin/index.md}
     */
    static create(min, definition = {}) {
        return new DataParserCheckerTimeMin({
            ...definition,
            min,
        });
    }
}
/**
 * {@include dataParser/classic/checkerTimeMin/index.md}
 */
const checkerTimeMin = detachObjectMethod(DataParserCheckerTimeMin, "create");

export { DataParserCheckerTimeMin, checkerTimeMin, checkerTimeMinKind };
