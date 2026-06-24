import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { SymbolDataParserError, setErrorPath, popErrorPath, addIssue } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { callThen } from '../../common/callThen.mjs';

const unionKind = createDataParserKind("union");
class DataParserUnion extends DataParserBase.init(unionKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserUnion);
    }
    static execParse(self, data, error) {
        const unionError = {
            ...error,
            currentPath: [...error.currentPath],
            issues: [],
        };
        const currentIndexPath = unionError.currentPath.length;
        const output = self.definition.options.reduce((accumulator, dataParser, index) => callThen(accumulator, (awaitedAccumulator) => {
            if (awaitedAccumulator !== SymbolDataParserError) {
                return awaitedAccumulator;
            }
            setErrorPath(unionError, `(option: ${index})`, currentIndexPath);
            return dataParser.exec(data, unionError);
        }), SymbolDataParserError);
        void (currentIndexPath !== unionError.currentPath.length && popErrorPath(unionError));
        return callThen(output, (awaitedOutput) => {
            if (awaitedOutput !== SymbolDataParserError) {
                return awaitedOutput;
            }
            error.issues.push(...unionError.issues);
            return addIssue(error, "respect at least one union value", data, self.definition.errorMessage, self);
        });
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.options.some((element) => element.isAsynchronous());
    }
    static prepareDefinition(options, definition) {
        return {
            ...definition,
            options,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/union/index.md}
     */
    static create(options, definition) {
        return new DataParserUnion(this.prepareDefinition(options, definition));
    }
}
/**
 * {@include dataParser/classic/union/index.md}
 */
const union = detachObjectMethod(DataParserUnion, "create");

export { DataParserUnion, union, unionKind };
