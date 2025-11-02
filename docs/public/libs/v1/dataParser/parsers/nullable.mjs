import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const nullableKind = createDataParserKind("nullable");
function nullable(inner, definition) {
    return dataParserInit(nullableKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
        },
    }, {
        sync: (data, error, self) => {
            if (data === null) {
                return data;
            }
            return self.definition.inner.exec(data, error);
        },
        async: async (data, error, self) => {
            if (data === null) {
                return data;
            }
            return self.definition.inner.asyncExec(data, error);
        },
    });
}

export { nullable, nullableKind };
