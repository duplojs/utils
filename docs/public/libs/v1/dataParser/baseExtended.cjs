'use strict';

var entries = require('../object/entries.cjs');
var pipe = require('../common/pipe.cjs');
require('../common/stringToBytes.cjs');
require('../common/stringToMillisecond.cjs');
var fromEntries = require('../object/fromEntries.cjs');
var entry = require('../object/entry.cjs');
var map = require('../array/map.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
require('../either/bool/falsy.cjs');
require('../either/bool/truthy.cjs');
require('../either/bool/base.cjs');
require('../either/left/create.cjs');
require('../either/left/error.cjs');
require('../either/left/fail.cjs');
require('../either/kind.cjs');
require('../either/right/success.cjs');
require('../either/right/create.cjs');
require('../either/right/ok.cjs');
require('../either/future/success.cjs');
require('../either/future/error.cjs');
require('../either/future/base.cjs');
require('../either/nullable/empty.cjs');
require('../either/nullable/filled.cjs');
require('../either/nullable/base.cjs');
require('../either/nullish/empty.cjs');
require('../either/nullish/filled.cjs');
require('../either/nullish/base.cjs');
require('../either/optional/empty.cjs');
require('../either/optional/filled.cjs');
require('../either/optional/base.cjs');
var override = require('../common/override.cjs');
require('./parsers/string/index.cjs');
require('./parsers/object/index.cjs');
require('./parsers/number/index.cjs');
require('./parsers/date.cjs');
require('./parsers/literal.cjs');
require('./parsers/union.cjs');
require('./parsers/array/index.cjs');
require('./parsers/bigint/index.cjs');
require('./parsers/tuple.cjs');
require('./parsers/transform.cjs');
require('./parsers/nil.cjs');
require('./parsers/boolean.cjs');
require('./parsers/empty.cjs');
require('./parsers/templateLiteral/index.cjs');
require('./parsers/pipe.cjs');
require('./parsers/optional.cjs');
require('./parsers/nullable.cjs');
require('./parsers/lazy.cjs');
require('./parsers/unknown.cjs');
require('./parsers/record/index.cjs');
var refine = require('./parsers/refine.cjs');
require('./parsers/recover.cjs');
require('./extended/string.cjs');
var array = require('./extended/array.cjs');
require('./extended/bigint.cjs');
require('./extended/number.cjs');
require('./extended/date.cjs');
var transform = require('./extended/transform.cjs');
var union = require('./extended/union.cjs');
require('./extended/boolean.cjs');
require('./extended/empty.cjs');
require('./extended/lazy.cjs');
require('./extended/literal.cjs');
require('./extended/nil.cjs');
var nullable = require('./extended/nullable.cjs');
require('./extended/object.cjs');
var optional = require('./extended/optional.cjs');
var pipe$1 = require('./extended/pipe.cjs');
require('./extended/record.cjs');
require('./extended/templateLiteral.cjs');
require('./extended/tuple.cjs');
require('./extended/unknown.cjs');
var recover = require('./extended/recover.cjs');
require('./error.cjs');
var kind = require('./kind.cjs');

const extendedKind = kind.createDataParserKind("extended");
function dataParserExtendedInit(dataParser, rest) {
    const self = pipe.pipe({
        ...dataParser,
        ...pipe.pipe(rest, entries.entries, map.map(([key, value]) => entry.entry(key, typeof value === "function"
            ? (...args) => value(self, ...args)
            : value)), fromEntries.fromEntries),
        array(definition) {
            return array.array(self, definition);
        },
        transform(theFunction, definition) {
            return transform.transform(self, theFunction, definition);
        },
        arrayCoalescing() {
            return union.union([
                self.array(),
                self.transform((data) => [data]),
            ]);
        },
        pipe(output, definition) {
            return pipe$1.pipe(self, output, definition);
        },
        nullable(definition) {
            return nullable.nullable(self, definition);
        },
        optional(definition) {
            return optional.optional(self, definition);
        },
        or(option, definition) {
            return union.union([self, option], definition);
        },
        addChecker(...checkers) {
            return dataParserExtendedInit(dataParser.addChecker(...checkers), rest);
        },
        clone() {
            return dataParserExtendedInit(dataParser.clone(), rest);
        },
        refine(theFunction) {
            return dataParserExtendedInit(dataParser.addChecker(refine.checkerRefine(theFunction)), rest);
        },
        recover(recoveredValue, definition) {
            return recover.recover(self, recoveredValue, definition);
        },
    }, extendedKind.setTo, dataParserExtendedInit.overrideHandler.apply);
    return self;
}
dataParserExtendedInit.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/base");

exports.dataParserExtendedInit = dataParserExtendedInit;
exports.extendedKind = extendedKind;
