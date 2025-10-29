import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { union as union$1 } from '../parsers/union.mjs';
import '../../pattern/result.mjs';

function union(options, definition) {
    return dataParserExtendedInit(union$1(options, definition), {});
}

export { union };
