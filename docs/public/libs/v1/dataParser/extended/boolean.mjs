import { dataParserExtendedInit } from '../baseExtended.mjs';
import { boolean as boolean$1 } from '../parsers/boolean.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/boolean/index.md}
 */
function boolean(definition) {
    const self = dataParserExtendedInit(boolean$1(definition), {}, boolean.overrideHandler);
    return self;
}
boolean.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/boolean");

export { boolean };
