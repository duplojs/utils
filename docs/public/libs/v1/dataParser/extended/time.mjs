import { dataParserExtendedInit } from '../baseExtended.mjs';
import { time as time$1 } from '../parsers/time/index.mjs';
import { checkerTimeMax } from '../parsers/time/checkers/max.mjs';
import { checkerTimeMin } from '../parsers/time/checkers/min.mjs';
import { createOverride } from '../../common/override.mjs';

function time(definition) {
    const self = dataParserExtendedInit(time$1(definition), {
        min(self, min, definition) {
            return self.addChecker(checkerTimeMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerTimeMax(max, definition));
        },
    });
    return time.overrideHandler.apply(self);
}
time.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/time");

export { time };
