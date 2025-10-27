import { dataParserExtendedInit } from '../baseExtended.mjs';
import { array as array$1 } from '../parsers/array/index.mjs';
import '../../pattern/result.mjs';
import { checkerArrayMax } from '../parsers/array/checkers/max.mjs';
import { checkerArrayMin } from '../parsers/array/checkers/min.mjs';

function array(element, definition) {
    return dataParserExtendedInit(array$1(element, definition), {
        min(self, min, definition) {
            return self.addChecker(checkerArrayMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerArrayMax(max, definition));
        },
    });
}

export { array };
