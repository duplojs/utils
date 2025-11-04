import { entries } from '../object/entries.mjs';
import { pipe } from '../common/pipe.mjs';
import { fromEntries } from '../object/fromEntries.mjs';
import { entry } from '../object/entry.mjs';
import { map } from '../array/map.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import { createDataParserKind } from './kind.mjs';
import '../pattern/result.mjs';
import { array } from './extended/array.mjs';
import { transform } from './extended/transform.mjs';
import { union } from './extended/union.mjs';
import { nullable } from './extended/nullable.mjs';
import { optional } from './extended/optional.mjs';
import { pipe as pipe$1 } from './extended/pipe.mjs';

const extendedKind = createDataParserKind("extended");
function dataParserExtendedInit(dataParser, rest) {
    const self = extendedKind.setTo({
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
        addChecker: (...checkers) => dataParserExtendedInit(dataParser.addChecker(...checkers), rest),
        clone: () => dataParserExtendedInit(dataParser.clone(), rest),
    });
    return self;
}

export { dataParserExtendedInit, extendedKind };
