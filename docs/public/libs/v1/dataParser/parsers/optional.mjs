import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const optionalKind = createDataParserKind("optional");
function optional(inner, definition) {
    return dataParserInit(optionalKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
        },
    }, {
        sync: (data, error, self) => {
            if (data === undefined) {
                return data;
            }
            return self.definition.inner.exec(data, error);
        },
        async: async (data, error, self) => {
            if (data === undefined) {
                return data;
            }
            return self.definition.inner.asyncExec(data, error);
        },
    });
}

export { optional, optionalKind };
