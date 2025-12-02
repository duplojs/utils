import { dataParserExtendedInit } from '../baseExtended.mjs';
import { record as record$1 } from '../parsers/record/index.mjs';
import { createOverride } from '../../common/override.mjs';

function record(key, value, definition) {
    const self = dataParserExtendedInit(record$1(key, value, definition), {});
    return record.overrideHandler.apply(self);
}
record.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/record");

export { record };
