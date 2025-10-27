import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../pattern/result.mjs';
import { pipe as pipe$1 } from '../parsers/pipe.mjs';

function pipe(input, output, definition) {
    return dataParserExtendedInit(pipe$1(input, output, definition), {});
}

export { pipe };
