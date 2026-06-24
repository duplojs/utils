import { addIssue } from '../../../error.mjs';
import { number } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerIntKind = createDataParserKind("checker-number-int");
class DataParserCheckerInt extends DataParserCheckerBase.init(checkerIntKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerInt);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error, self, dataParser) {
        if (Number.isInteger(data)) {
            return data;
        }
        return addIssue(error, "integer", data, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    static create(definition = {}) {
        return new DataParserCheckerInt(definition);
    }
}
const checkerInt = detachObjectMethod(DataParserCheckerInt, "create");
function int(definition) {
    return number({
        checkers: [checkerInt(definition)],
    });
}

export { DataParserCheckerInt, checkerInt, checkerIntKind, int };
