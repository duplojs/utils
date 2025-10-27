import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../pattern/result.mjs';
import { record as record$1 } from '../parsers/record.mjs';

function record(key, value, definition) {
    return dataParserExtendedInit(record$1(key, value, definition), {});
}

export { record };
