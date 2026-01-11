import { dataParserExtendedInit } from '../baseExtended.mjs';
import { lazy as lazy$1 } from '../parsers/lazy.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/lazy/index.md}
 */
function lazy(getter, definition) {
    const self = dataParserExtendedInit(lazy$1(getter, definition), {});
    return lazy.overrideHandler.apply(self);
}
lazy.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/lazy");

export { lazy };
