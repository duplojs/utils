import { dataParserExtendedInit } from '../baseExtended.mjs';
import { literal as literal$1 } from '../parsers/literal.mjs';
import { createOverride } from '../../common/override.mjs';

function literal(value, definition) {
    const self = dataParserExtendedInit(literal$1(value, definition), {});
    return literal.overrideHandler.apply(self);
}
literal.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/literal");

export { literal };
