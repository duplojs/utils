import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { setErrorPath, SymbolDataParserError, popErrorPath } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { callThen } from '../../common/callThen.mjs';

const pipeKind = createDataParserKind("pipe");
class DataParserPipe extends DataParserBase.init(pipeKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserPipe);
    }
    static execParse(self, data, error) {
        const currentIndexPath = error.currentPath.length;
        setErrorPath(error, "(pipeIn)", currentIndexPath);
        return callThen(self.definition.input.exec(data, error), (resultIn) => {
            if (resultIn === SymbolDataParserError) {
                popErrorPath(error);
                return SymbolDataParserError;
            }
            setErrorPath(error, "(pipeOut)", currentIndexPath);
            return callThen(self.definition.output.exec(resultIn, error), (resultOut) => {
                popErrorPath(error);
                return resultOut;
            });
        });
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.input.isAsynchronous() || self.definition.output.isAsynchronous();
    }
    static prepareDefinition(input, output, definition) {
        return {
            ...definition,
            input,
            output,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/pipe/index.md}
     */
    static create(input, output, definition) {
        return new DataParserPipe(this.prepareDefinition(input, output, definition));
    }
}
/**
 * {@include dataParser/classic/pipe/index.md}
 */
const pipe = detachObjectMethod(DataParserPipe, "create");

export { DataParserPipe, pipe, pipeKind };
