import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../pattern/result.mjs';
import { record as record$1 } from '../parsers/record.mjs';

function record(key, value, definition) {
    return dataParserExtendedInit(record$1(key, value, definition), {});
}

export { record };
