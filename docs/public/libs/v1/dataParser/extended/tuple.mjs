import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../either/bool/falsy.mjs';
import '../../either/bool/truthy.mjs';
import '../../either/bool/base.mjs';
import '../../either/left/create.mjs';
import '../../either/left/error.mjs';
import '../../either/left/fail.mjs';
import '../../either/kind.mjs';
import '../../either/right/success.mjs';
import '../../either/right/create.mjs';
import '../../either/right/ok.mjs';
import '../../either/future/success.mjs';
import '../../either/future/error.mjs';
import '../../either/future/base.mjs';
import '../../either/nullable/empty.mjs';
import '../../either/nullable/filled.mjs';
import '../../either/nullable/base.mjs';
import '../../either/nullish/empty.mjs';
import '../../either/nullish/filled.mjs';
import '../../either/nullish/base.mjs';
import '../../either/optional/empty.mjs';
import '../../either/optional/filled.mjs';
import '../../either/optional/base.mjs';
import { createOverride } from '../../common/override.mjs';
import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../parsers/string/index.mjs';
import '../parsers/object/index.mjs';
import '../parsers/number/index.mjs';
import '../parsers/date.mjs';
import '../parsers/literal.mjs';
import '../parsers/union.mjs';
import '../parsers/array/index.mjs';
import '../parsers/bigint/index.mjs';
import { tuple as tuple$1 } from '../parsers/tuple.mjs';
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
import { checkerArrayMax } from '../parsers/array/checkers/max.mjs';
import { checkerArrayMin } from '../parsers/array/checkers/min.mjs';

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
