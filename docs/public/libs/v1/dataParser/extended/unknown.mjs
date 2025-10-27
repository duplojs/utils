import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../pattern/result.mjs';
import { unknown as unknown$1 } from '../parsers/unknown.mjs';

function unknown(definition) {
    return dataParserExtendedInit(unknown$1(definition), {});
}

export { unknown };
