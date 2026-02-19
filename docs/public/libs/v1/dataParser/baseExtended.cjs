'use strict';

var kind = require('./kind.cjs');
var pipe = require('../common/pipe.cjs');
var entries = require('../object/entries.cjs');
var map = require('../array/map.cjs');
var entry = require('../object/entry.cjs');
var fromEntries = require('../object/fromEntries.cjs');
var recover = require('./extended/recover.cjs');
var refine = require('./parsers/refine.cjs');
var union = require('./extended/union.cjs');
var optional = require('./extended/optional.cjs');
var nullable = require('./extended/nullable.cjs');
var pipe$1 = require('./extended/pipe.cjs');
var transform = require('./extended/transform.cjs');
var array = require('./extended/array.cjs');
var override = require('../common/override.cjs');

const extendedKind = kind.createDataParserKind("extended");
function dataParserExtendedInit(dataParser, rest, specificOverrideHandler) {
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
            return dataParserExtendedInit(dataParser.addChecker(...checkers), rest, specificOverrideHandler);
        },
        clone() {
            return dataParserExtendedInit(dataParser.clone(), rest, specificOverrideHandler);
        },
        refine(theFunction) {
            return dataParserExtendedInit(dataParser.addChecker(refine.checkerRefine(theFunction)), rest, specificOverrideHandler);
        },
        recover(recoveredValue, definition) {
            return recover.recover(self, recoveredValue, definition);
        },
        contract() {
            return self;
        },
        contractExtended() {
            return self;
        },
    }, extendedKind.setTo, dataParserExtendedInit.overrideHandler.apply, specificOverrideHandler.apply);
    return self;
}
dataParserExtendedInit.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/base");

exports.dataParserExtendedInit = dataParserExtendedInit;
exports.extendedKind = extendedKind;
