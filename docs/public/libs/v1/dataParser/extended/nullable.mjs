import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../pattern/result.mjs';
import { nullable as nullable$1 } from '../parsers/nullable.mjs';

function nullable(inner, definition) {
    return dataParserExtendedInit(nullable$1(inner, definition), {});
}

export { nullable };
