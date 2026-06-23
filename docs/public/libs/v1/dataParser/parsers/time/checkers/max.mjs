import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';
import { lessTime } from '../../../../date/operators/lessTime.mjs';

const checkerTimeMaxKind = createDataParserKind("checker-time-max");
class DataParserCheckerTimeMax extends DataParserCheckerBase.init(checkerTimeMaxKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerTimeMax);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(value, error, self, dataParser) {
        return lessTime(value, self.definition.max)
            ? value
            : addIssue(error, `time <= ${self.definition.max.toString()}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    /**
     * {@include dataParser/classic/checkerTimeMax/index.md}
     */
    static create(max, definition = {}) {
        return new DataParserCheckerTimeMax({
            ...definition,
            max,
        });
    }
}
const checkerTimeMax = detachObjectMethod(DataParserCheckerTimeMax, "create");

export { DataParserCheckerTimeMax, checkerTimeMax, checkerTimeMaxKind };
