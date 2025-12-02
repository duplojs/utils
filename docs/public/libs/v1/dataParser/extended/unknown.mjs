import { dataParserExtendedInit } from '../baseExtended.mjs';
import { unknown as unknown$1 } from '../parsers/unknown.mjs';
import { createOverride } from '../../common/override.mjs';

function unknown(definition) {
    const self = dataParserExtendedInit(unknown$1(definition), {});
    return unknown.overrideHandler.apply(self);
}
unknown.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/unknown");

export { unknown };
