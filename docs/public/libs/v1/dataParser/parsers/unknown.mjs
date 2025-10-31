import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const dataParserUnknownKind = createDataParserKind("unknown");
function unknown(definition) {
    return dataParserInit(dataParserUnknownKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
        },
    }, (data) => data);
}

export { dataParserUnknownKind, unknown };
