import { createDataParserKind } from './kind.mjs';
import { pipe } from '../common/pipe.mjs';
import { entries } from '../object/entries.mjs';
import { map } from '../array/map.mjs';
import { entry } from '../object/entry.mjs';
import { fromEntries } from '../object/fromEntries.mjs';
import { recover } from './extended/recover.mjs';
import { checkerRefine } from './parsers/refine.mjs';
import { union } from './extended/union.mjs';
import { optional } from './extended/optional.mjs';
import { nullable } from './extended/nullable.mjs';
import { pipe as pipe$1 } from './extended/pipe.mjs';
import { transform } from './extended/transform.mjs';
import { array } from './extended/array.mjs';
import { createOverride } from '../common/override.mjs';

const extendedKind = createDataParserKind("extended");
function dataParserExtendedInit(dataParser, rest, specificOverrideHandler) {
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
            return dataParserExtendedInit(dataParser.addChecker(...checkers), rest, specificOverrideHandler);
        },
        clone() {
            return dataParserExtendedInit(dataParser.clone(), rest, specificOverrideHandler);
        },
        refine(theFunction) {
            return dataParserExtendedInit(dataParser.addChecker(checkerRefine(theFunction)), rest, specificOverrideHandler);
        },
        recover(recoveredValue, definition) {
            return recover(self, recoveredValue, definition);
        },
        contract() {
            return self;
        },
    }, extendedKind.setTo, dataParserExtendedInit.overrideHandler.apply, specificOverrideHandler.apply);
    return self;
}
dataParserExtendedInit.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/base");

export { dataParserExtendedInit, extendedKind };
