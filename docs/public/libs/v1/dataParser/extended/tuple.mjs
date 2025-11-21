import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../base.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { checkerArrayMin } from '../parsers/array/checkers/min.mjs';
import { checkerArrayMax } from '../parsers/array/checkers/max.mjs';
import { tuple as tuple$1 } from '../parsers/tuple.mjs';
import '../../pattern/result.mjs';

function tuple(shape, definition) {
    return dataParserExtendedInit(tuple$1(shape, definition), {
        min(self, min, definition) {
            return self.addChecker(checkerArrayMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerArrayMax(max, definition));
        },
    });
}

export { tuple };
