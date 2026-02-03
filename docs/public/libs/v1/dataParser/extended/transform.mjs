import { dataParserExtendedInit } from '../baseExtended.mjs';
import { transform as transform$1 } from '../parsers/transform.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/transform/index.md}
 */
function transform(inner, theFunction, definition) {
    const self = dataParserExtendedInit(transform$1(inner, theFunction, definition), {}, transform.overrideHandler);
    return self;
}
transform.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/transform");

export { transform };
