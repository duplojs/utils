import { entries } from '../object/entries.mjs';
import { pipe } from '../common/pipe.mjs';
import '../common/stringToBytes.mjs';
import '../common/stringToMillisecond.mjs';
import { fromEntries } from '../object/fromEntries.mjs';
import { entry } from '../object/entry.mjs';
import { map } from '../array/map.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import '../either/bool/falsy.mjs';
import '../either/bool/truthy.mjs';
import '../either/bool/base.mjs';
import '../either/left/create.mjs';
import '../either/left/error.mjs';
import '../either/left/fail.mjs';
import '../either/kind.mjs';
import '../either/right/success.mjs';
import '../either/right/create.mjs';
import '../either/right/ok.mjs';
import '../either/future/success.mjs';
import '../either/future/error.mjs';
import '../either/future/base.mjs';
import '../either/nullable/empty.mjs';
import '../either/nullable/filled.mjs';
import '../either/nullable/base.mjs';
import '../either/nullish/empty.mjs';
import '../either/nullish/filled.mjs';
import '../either/nullish/base.mjs';
import '../either/optional/empty.mjs';
import '../either/optional/filled.mjs';
import '../either/optional/base.mjs';
import { createOverride } from '../common/override.mjs';
import './parsers/string/index.mjs';
import './parsers/object/index.mjs';
import './parsers/number/index.mjs';
import './parsers/date.mjs';
import './parsers/literal.mjs';
import './parsers/union.mjs';
import './parsers/array/index.mjs';
import './parsers/bigint/index.mjs';
import './parsers/tuple.mjs';
import './parsers/transform.mjs';
import './parsers/nil.mjs';
import './parsers/boolean.mjs';
import './parsers/empty.mjs';
import './parsers/templateLiteral/index.mjs';
import './parsers/pipe.mjs';
import './parsers/optional.mjs';
import './parsers/nullable.mjs';
import './parsers/lazy.mjs';
import './parsers/unknown.mjs';
import './parsers/record/index.mjs';
import { checkerRefine } from './parsers/refine.mjs';
import './parsers/recover.mjs';
import './extended/string.mjs';
import { array } from './extended/array.mjs';
import './extended/bigint.mjs';
import './extended/number.mjs';
import './extended/date.mjs';
import { transform } from './extended/transform.mjs';
import { union } from './extended/union.mjs';
import './extended/boolean.mjs';
import './extended/empty.mjs';
import './extended/lazy.mjs';
import './extended/literal.mjs';
import './extended/nil.mjs';
import { nullable } from './extended/nullable.mjs';
import './extended/object.mjs';
import { optional } from './extended/optional.mjs';
import { pipe as pipe$1 } from './extended/pipe.mjs';
import './extended/record.mjs';
import './extended/templateLiteral.mjs';
import './extended/tuple.mjs';
import './extended/unknown.mjs';
import { recover } from './extended/recover.mjs';
import './error.mjs';
import { createDataParserKind } from './kind.mjs';

const extendedKind = createDataParserKind("extended");
function dataParserExtendedInit(dataParser, rest) {
    const self = pipe({
        ...dataParser,
        ...pipe(rest, entries, map(([key, value]) => entry(key, typeof value === "function"
            ? (...args) => value(self, ...args)
            : value)), fromEntries),
        array(definition) {
            return array(self, definition);
        },
        transform(theFunction, definition) {
            return transform(self, theFunction, definition);
        },
        arrayCoalescing() {
            return union([
                self.array(),
                self.transform((data) => [data]),
            ]);
        },
        pipe(output, definition) {
            return pipe$1(self, output, definition);
        },
        nullable(definition) {
            return nullable(self, definition);
        },
        optional(definition) {
            return optional(self, definition);
        },
        or(option, definition) {
            return union([self, option], definition);
        },
        addChecker(...checkers) {
            return dataParserExtendedInit(dataParser.addChecker(...checkers), rest);
        },
        clone() {
            return dataParserExtendedInit(dataParser.clone(), rest);
        },
        refine(theFunction) {
            return dataParserExtendedInit(dataParser.addChecker(checkerRefine(theFunction)), rest);
        },
        recover(recoveredValue, definition) {
            return recover(self, recoveredValue, definition);
        },
    }, extendedKind.setTo, dataParserExtendedInit.overrideHandler.apply);
    return self;
}
dataParserExtendedInit.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/base");

export { dataParserExtendedInit, extendedKind };
