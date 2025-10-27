import { createKind } from '../../common/kind.mjs';
import { dataParserInit } from '../base.mjs';

const dataParserLazyKind = createKind("data-parser-lazy");
function lazy(getter, definition) {
    return dataParserInit(dataParserLazyKind, {
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

export { dataParserLazyKind, lazy };
