import { createKind } from '../../common/kind.mjs';
import { dataParserInit } from '../base.mjs';

const dataParserUnknownKind = createKind("data-parser-unknown");
function unknown(definition) {
    return dataParserInit(dataParserUnknownKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
        },
    }, (data) => data);
}

export { dataParserUnknownKind, unknown };
