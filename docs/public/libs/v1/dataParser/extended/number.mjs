import { dataParserExtendedInit } from '../baseExtended.mjs';
import { number as number$1 } from '../parsers/number/index.mjs';
import { checkerInt } from '../parsers/number/checkers/int.mjs';
import { checkerNumberMax } from '../parsers/number/checkers/max.mjs';
import { checkerNumberMin } from '../parsers/number/checkers/min.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/number/index.md}
 */
function number(definition) {
    const self = dataParserExtendedInit(number$1(definition), {
        min(self, min, definition) {
            return self.addChecker(checkerNumberMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerNumberMax(max, definition));
        },
        int(self, definition) {
            return self.addChecker(checkerInt(definition));
        },
    }, number.overrideHandler);
    return self;
}
number.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/number");
/**
 * {@include dataParser/extended/int/index.md}
 */
function int(definition) {
    return number({
        checkers: [checkerInt(definition)],
    });
}

export { int, number };
