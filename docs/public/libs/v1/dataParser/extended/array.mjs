import { dataParserExtendedInit } from '../baseExtended.mjs';
import { array as array$1 } from '../parsers/array/index.mjs';
import { checkerArrayMax } from '../parsers/array/checkers/max.mjs';
import { checkerArrayMin } from '../parsers/array/checkers/min.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/array/index.md}
 */
function array(element, definition) {
    const self = dataParserExtendedInit(array$1(element, definition), {
        min(self, min, definition) {
            return self.addChecker(checkerArrayMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerArrayMax(max, definition));
        },
    }, array.overrideHandler);
    return self;
}
array.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/array");

export { array };
