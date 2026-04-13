import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';
import { setErrorPath, SymbolDataParserError, popErrorPath } from '../error.mjs';
import { createOverride } from '../../common/override.mjs';

const pipeKind = createDataParserKind("pipe");
/**
 * {@include dataParser/classic/pipe/index.md}
 */
function pipe(input, output, definition) {
    const self = dataParserInit(pipeKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        input,
        output,
    }, {
        sync: (data, error, self) => {
            const currentIndexPath = error.currentPath.length;
            setErrorPath(error, "(pipeIn)", currentIndexPath);
            const resultIn = self.definition.input.exec(data, error);
            if (resultIn === SymbolDataParserError) {
                popErrorPath(error);
                return SymbolDataParserError;
            }
            setErrorPath(error, "(pipeOut)", currentIndexPath);
            const resultOut = self.definition.output.exec(resultIn, error);
            popErrorPath(error);
            return resultOut;
        },
        async: async (data, error, self) => {
            const currentIndexPath = error.currentPath.length;
            setErrorPath(error, "(pipeIn)", currentIndexPath);
            const resultIn = await self.definition.input.asyncExec(data, error);
            if (resultIn === SymbolDataParserError) {
                popErrorPath(error);
                return SymbolDataParserError;
            }
            setErrorPath(error, "(pipeOut)", currentIndexPath);
            return self.definition.output.asyncExec(resultIn, error)
                .then((resultOut) => {
                popErrorPath(error);
                return resultOut;
            });
        },
        isAsynchronous: (self) => self.definition.input.isAsynchronous() || self.definition.output.isAsynchronous(),
    }, pipe.overrideHandler);
    return self;
}
pipe.overrideHandler = createOverride("@duplojs/utils/data-parser/pipe");

export { pipe, pipeKind };
