import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { addIssue, setErrorPath, SymbolDataParserError, popErrorPath } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { callThen } from '../../common/callThen.mjs';

const tupleKind = createDataParserKind("tuple");
class DataParserTuple extends DataParserBase.init(tupleKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserTuple);
    }
    static execParse(self, data, error) {
        if (!(data instanceof Array)) {
            return addIssue(error, "tuple array", data, self.definition.errorMessage, self);
        }
        const currentIndexPath = error.currentPath.length;
        const output = data.reduce((accumulator, value, index) => callThen(accumulator, (awaitedAccumulator) => {
            const dataParser = self.definition.shape[index] ?? self.definition.rest;
            setErrorPath(error, dataParser === self.definition.rest
                ? `[tupleRest: ${index}]`
                : `[tuple: ${index}]`, currentIndexPath);
            if (!dataParser) {
                addIssue(error, "empty", data, self.definition.errorMessage, self);
                return SymbolDataParserError;
            }
            return callThen(dataParser.exec(value, error), (result) => {
                if (result === SymbolDataParserError
                    || awaitedAccumulator === SymbolDataParserError) {
                    return SymbolDataParserError;
                }
                awaitedAccumulator.push(result);
                return awaitedAccumulator;
            });
        }), []);
        void (currentIndexPath !== error.currentPath.length && popErrorPath(error));
        return output;
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.shape.some((element) => element.isAsynchronous()) || !!self.definition.rest?.isAsynchronous();
    }
    static prepareDefinition(shape, definition) {
        return {
            ...definition,
            shape,
            rest: definition?.rest,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/tuple/index.md}
     */
    static create(shape, definition) {
        return new DataParserTuple(this.prepareDefinition(shape, definition));
    }
}
/**
 * {@include dataParser/classic/tuple/index.md}
 */
const tuple = detachObjectMethod(DataParserTuple, "create");

export { DataParserTuple, tuple, tupleKind };
