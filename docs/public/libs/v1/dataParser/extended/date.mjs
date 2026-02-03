import { dataParserExtendedInit } from '../baseExtended.mjs';
import { date as date$1 } from '../parsers/date.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/date/index.md}
 */
function date(definition) {
    const self = dataParserExtendedInit(date$1(definition), {}, date.overrideHandler);
    return self;
}
date.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/date");

export { date };
