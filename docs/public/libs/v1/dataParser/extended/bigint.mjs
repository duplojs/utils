import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../base.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { bigint as bigint$1 } from '../parsers/bigint/index.mjs';
import '../../pattern/result.mjs';
import { checkerBigIntMax } from '../parsers/bigint/checkers/max.mjs';
import { checkerBigIntMin } from '../parsers/bigint/checkers/min.mjs';

function bigint(definition) {
    return dataParserExtendedInit(bigint$1(definition), {
        min(self, min, definition) {
            return self.addChecker(checkerBigIntMin(min, definition));
        },
        max(self, max, definition) {
            return self.addChecker(checkerBigIntMax(max, definition));
        },
    });
}

export { bigint };
