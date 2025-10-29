import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../pattern/result.mjs';
import { optional as optional$1 } from '../parsers/optional.mjs';

function optional(inner, definition) {
    return dataParserExtendedInit(optional$1(inner, definition), {});
}

export { optional };
