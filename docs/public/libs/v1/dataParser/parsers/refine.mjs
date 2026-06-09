import { DataParserCheckerBase } from '../baseChecker.mjs';
import { addIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { callThen } from '../../common/callThen.mjs';

const dataParserCheckerRefineKind = createDataParserKind("refine");
class DataParserCheckerRefine extends DataParserCheckerBase.init(dataParserCheckerRefineKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerRefine);
    }
    isAsynchronous() {
        return this.definition.theFunction.constructor.name === "AsyncFunction";
    }
    static execCheck(value, error, self, dataParser) {
        return callThen(self.definition.theFunction(value), (awaitedResult) => awaitedResult
            ? value
            : addIssue(error, "value matching refine predicate", value, self.definition.errorMessage ?? dataParser.definition.errorMessage), (catchError) => addIssue(error, "successful refine result", catchError, self.definition.errorMessage ?? dataParser.definition.errorMessage));
    }
    static create(theFunction, definition) {
        return new DataParserCheckerRefine({
            ...definition,
            theFunction,
        });
    }
}
const checkerRefine = detachObjectMethod(DataParserCheckerRefine, "create");

export { DataParserCheckerRefine, checkerRefine, dataParserCheckerRefineKind };
