import { createDataParserKind } from '../../kind.mjs';
import { DataParserBase } from '../../base.mjs';
import { addIssue, setErrorPath, SymbolDataParserError, popErrorPath } from '../../error.mjs';
import { callThen } from '../../../common/callThen.mjs';
import { detachObjectMethod } from '../../../common/detachObjectMethod.mjs';

const arrayKind = createDataParserKind("array");
class DataParserArray extends DataParserBase.init(arrayKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserArray);
    }
    static execParse(self, data, error) {
        if (!(data instanceof Array)) {
            return addIssue(error, "array", data, self.definition.errorMessage);
        }
        const currentIndexPath = error.currentPath.length;
        const output = data.reduce((accumulator, element, index) => callThen(accumulator, (awaitedAccumulator) => {
            setErrorPath(error, `[${index}]`, currentIndexPath);
            return callThen(self.definition.element.exec(element, error), (awaitedResult) => {
                if (awaitedResult === SymbolDataParserError
                    || awaitedAccumulator === SymbolDataParserError) {
                    return SymbolDataParserError;
                }
                awaitedAccumulator.push(awaitedResult);
                return awaitedAccumulator;
            });
        }), []);
        void (currentIndexPath !== error.currentPath.length && popErrorPath(error));
        return output;
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.element.isAsynchronous();
    }
    static prepareDefinition(element, definition) {
        return {
            ...definition,
            element,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/array/index.md}
     */
    static create(element, definition) {
        return new DataParserArray(this.prepareDefinition(element, definition));
    }
}
const array = detachObjectMethod(DataParserArray, "create");

export { DataParserArray, array, arrayKind };
