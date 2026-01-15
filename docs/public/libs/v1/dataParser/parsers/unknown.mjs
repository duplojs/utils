import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const unknownKind = createDataParserKind("unknown");
/**
 * {@include dataParser/classic/unknown/index.md}
 */
function unknown(definition) {
    const self = dataParserInit(unknownKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
    }, (data) => data, unknown.overrideHandler);
    return self;
}
unknown.overrideHandler = createOverride("@duplojs/utils/data-parser/unknown");

export { unknown, unknownKind };
