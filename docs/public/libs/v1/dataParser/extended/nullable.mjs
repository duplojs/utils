import { dataParserExtendedInit } from '../baseExtended.mjs';
import { nullable as nullable$1 } from '../parsers/nullable.mjs';
import { createOverride } from '../../common/override.mjs';

function nullable(inner, definition) {
    const self = dataParserExtendedInit(nullable$1(inner, definition), {});
    return nullable.overrideHandler.apply(self);
}
nullable.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/nullable");

export { nullable };
