import { dataParserExtendedInit } from '../baseExtended.mjs';
import { bigint as bigint$1 } from '../parsers/bigint/index.mjs';
import { checkerBigIntMax } from '../parsers/bigint/checkers/max.mjs';
import { checkerBigIntMin } from '../parsers/bigint/checkers/min.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/bigint/index.md}
 */
function bigint(definition) {
    const self = dataParserExtendedInit(bigint$1(definition), {
        min(self, min, definition) {
            return self.addChecker(checkerBigIntMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerBigIntMax(max, definition));
        },
    });
    return bigint.overrideHandler.apply(self);
}
bigint.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/bigint");

export { bigint };
