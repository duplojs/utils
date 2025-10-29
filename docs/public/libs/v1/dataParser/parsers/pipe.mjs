import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const dataParserPipeKind = createDataParserKind("pipe");
function pipe(input, output, definition) {
    return dataParserInit(dataParserPipeKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            input,
            output,
        },
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
    });
}

export { dataParserPipeKind, pipe };
