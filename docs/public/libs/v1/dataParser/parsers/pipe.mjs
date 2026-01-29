import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';
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
            const result = self.definition.input.exec(data, error);
            if (result === SymbolDataParserError) {
                return SymbolDataParserError;
            }
            return self.definition.output.exec(result, error);
        },
        async: async (data, error, self) => {
            const result = await self.definition.input.asyncExec(data, error);
            if (result === SymbolDataParserError) {
                return SymbolDataParserError;
            }
            return self.definition.output.asyncExec(result, error);
        },
        isAsynchronous: (self) => self.definition.input.isAsynchronous() || self.definition.output.isAsynchronous(),
    }, pipe.overrideHandler);
    return self;
}
pipe.overrideHandler = createOverride("@duplojs/utils/data-parser/pipe");

export { pipe, pipeKind };
