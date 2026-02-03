import { dataParserExtendedInit } from '../baseExtended.mjs';
import { nullable as nullable$1 } from '../parsers/nullable.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/nullable/index.md}
 */
function nullable(inner, definition) {
    const self = dataParserExtendedInit(nullable$1(inner, definition), {}, nullable.overrideHandler);
    return self;
}
nullable.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/nullable");

export { nullable };
