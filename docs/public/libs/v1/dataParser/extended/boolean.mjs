import { dataParserExtendedInit } from '../baseExtended.mjs';
import { boolean as boolean$1 } from '../parsers/boolean.mjs';
import { createOverride } from '../../common/override.mjs';

function boolean(definition) {
    const self = dataParserExtendedInit(boolean$1(definition), {});
    return boolean.overrideHandler.apply(self);
}
boolean.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/boolean");

export { boolean };
