import { dataParserExtendedInit } from '../baseExtended.mjs';
import { pipe as pipe$1 } from '../parsers/pipe.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/pipe/index.md}
 */
function pipe(input, output, definition) {
    const self = dataParserExtendedInit(pipe$1(input, output, definition), {});
    return pipe.overrideHandler.apply(self);
}
pipe.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/pipe");

export { pipe };
