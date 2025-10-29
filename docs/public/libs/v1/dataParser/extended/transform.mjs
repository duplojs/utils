import { dataParserExtendedInit } from '../baseExtended.mjs';
import { transform as transform$1 } from '../parsers/transform.mjs';
import '../../pattern/result.mjs';

function transform(inner, theFunction, definition) {
    return dataParserExtendedInit(transform$1(inner, theFunction, definition), {});
}

export { transform };
