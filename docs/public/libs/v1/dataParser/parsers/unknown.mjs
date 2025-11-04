import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const unknownKind = createDataParserKind("unknown");
function unknown(definition) {
    return dataParserInit(unknownKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
        },
    }, (data) => data);
}

export { unknown, unknownKind };
