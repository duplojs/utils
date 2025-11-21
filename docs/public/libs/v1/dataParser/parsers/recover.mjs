import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const recoverKind = createDataParserKind("recover");
function recover(inner, recoveredValue, definition) {
    return dataParserInit(recoverKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
            recoveredValue,
        },
    }, {
        sync: (data, error, self) => {
            const result = self.definition.inner.exec(data, error);
            return result === SymbolDataParserError
                ? self.definition.recoveredValue
                : result;
        },
        async: async (data, error, self) => {
            const result = await self.definition.inner.asyncExec(data, error);
            return result === SymbolDataParserError
                ? self.definition.recoveredValue
                : result;
        },
    });
}

export { recover, recoverKind };
