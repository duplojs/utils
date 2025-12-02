import { dataParserExtendedInit } from '../baseExtended.mjs';
import { date as date$1 } from '../parsers/date.mjs';
import { createOverride } from '../../common/override.mjs';

function date(definition) {
    const self = dataParserExtendedInit(date$1(definition), {});
    return date.overrideHandler.apply(self);
}
date.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/date");

export { date };
