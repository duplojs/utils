import { createKind } from '../../common/kind.mjs';
import { dataParserInit } from '../base.mjs';

const dataParserOptionalKind = createKind("data-parser-optional");
function optional(inner, definition) {
    return dataParserInit(dataParserOptionalKind, {
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

export { dataParserOptionalKind, optional };
