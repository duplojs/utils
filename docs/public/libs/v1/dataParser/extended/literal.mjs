import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../base.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { literal as literal$1 } from '../parsers/literal.mjs';
import '../../pattern/result.mjs';

function literal(value, definition) {
    return dataParserExtendedInit(literal$1(value, definition), {});
}

export { literal };
