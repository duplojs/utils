import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../base.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { number as number$1 } from '../parsers/number/index.mjs';
import '../../pattern/result.mjs';
import { checkerInt } from '../parsers/number/checkers/int.mjs';
import { checkerNumberMax } from '../parsers/number/checkers/max.mjs';
import { checkerNumberMin } from '../parsers/number/checkers/min.mjs';

function number(definition) {
    return dataParserExtendedInit(number$1(definition), {
        min(self, min, definition) {
            return self.addChecker(checkerNumberMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerNumberMax(max, definition));
        },
    });
}
function int(definition) {
    return number({
        checkers: [checkerInt(definition)],
    });
}

export { int, number };
