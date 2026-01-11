import { dataParserExtendedInit } from '../baseExtended.mjs';
import { union as union$1 } from '../parsers/union.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/union/index.md}
 */
function union(options, definition) {
    const self = dataParserExtendedInit(union$1(options, definition), {});
    return union.overrideHandler.apply(self);
}
union.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/union");

export { union };
