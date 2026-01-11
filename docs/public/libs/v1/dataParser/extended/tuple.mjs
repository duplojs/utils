import { dataParserExtendedInit } from '../baseExtended.mjs';
import { tuple as tuple$1 } from '../parsers/tuple.mjs';
import { checkerArrayMax } from '../parsers/array/checkers/max.mjs';
import { checkerArrayMin } from '../parsers/array/checkers/min.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/tuple/index.md}
 */
function tuple(shape, definition) {
    const self = dataParserExtendedInit(tuple$1(shape, definition), {
        min(self, min, definition) {
            return self.addChecker(checkerArrayMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerArrayMax(max, definition));
        },
    });
    return tuple.overrideHandler.apply(self);
}
tuple.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/tuple");

export { tuple };
