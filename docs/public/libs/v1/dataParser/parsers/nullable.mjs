import { createKind } from '../../common/kind.mjs';
import { dataParserInit } from '../base.mjs';

const dataParserNullableKind = createKind("data-parser-nullable");
function nullable(inner, definition) {
    return dataParserInit(dataParserNullableKind, {
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

export { dataParserNullableKind, nullable };
