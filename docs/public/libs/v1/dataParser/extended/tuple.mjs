import { dataParserExtendedInit } from '../baseExtended.mjs';
import { tuple as tuple$1 } from '../parsers/tuple.mjs';
import '../../pattern/result.mjs';

function tuple(shape, definition) {
    return dataParserExtendedInit(tuple$1(shape, definition), {});
}

export { tuple };
