import { dataParserExtendedInit } from '../baseExtended.mjs';
import { empty as empty$1 } from '../parsers/empty.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/empty/index.md}
 */
function empty(definition) {
    const self = dataParserExtendedInit(empty$1(definition), {});
    return empty.overrideHandler.apply(self);
}
empty.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/empty");

export { empty };
