import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const lazyKind = createDataParserKind("lazy");
function lazy(getter, definition) {
    return dataParserInit(lazyKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            getter,
        },
    }, {
        sync: (data, _error, self) => self.definition.getter().exec(data, _error),
        async: (data, _error, self) => self.definition.getter().asyncExec(data, _error),
    });
}

export { lazy, lazyKind };
