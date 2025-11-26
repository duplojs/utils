import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../parsers/string/index.mjs';
import '../parsers/object.mjs';
import { number as number$1 } from '../parsers/number/index.mjs';
import '../parsers/date.mjs';
import '../parsers/literal.mjs';
import '../parsers/union.mjs';
import '../parsers/array/index.mjs';
import '../parsers/bigint/index.mjs';
import '../parsers/tuple.mjs';
import '../parsers/transform.mjs';
import '../parsers/nil.mjs';
import '../parsers/boolean.mjs';
import '../parsers/empty.mjs';
import '../parsers/templateLiteral/index.mjs';
import '../parsers/pipe.mjs';
import '../parsers/optional.mjs';
import '../parsers/nullable.mjs';
import '../parsers/lazy.mjs';
import '../parsers/unknown.mjs';
import '../parsers/record/index.mjs';
import '../parsers/refine.mjs';
import '../parsers/recover.mjs';
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
