import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const unknownKind = createDataParserKind("unknown");
function unknown(definition) {
    const self = dataParserInit(unknownKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
    }, (data) => data);
    return unknown.overrideHandler.apply(self);
}
unknown.overrideHandler = createOverride("@duplojs/utils/data-parser/unknown");

export { unknown, unknownKind };
