'use strict';

var entries = require('../object/entries.cjs');
var pipe = require('../common/pipe.cjs');
var fromEntries = require('../object/fromEntries.cjs');
var entry = require('../object/entry.cjs');
var map = require('../array/map.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
require('./base.cjs');
var kind = require('./kind.cjs');
require('../pattern/result.cjs');
var refine = require('./parsers/refine.cjs');
var array = require('./extended/array.cjs');
var transform = require('./extended/transform.cjs');
var union = require('./extended/union.cjs');
var nullable = require('./extended/nullable.cjs');
var optional = require('./extended/optional.cjs');
var pipe$1 = require('./extended/pipe.cjs');
var recover = require('./extended/recover.cjs');

const extendedKind = kind.createDataParserKind("extended");
function dataParserExtendedInit(dataParser, rest) {
    const self = extendedKind.setTo({
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
    });
    return self;
}

exports.dataParserExtendedInit = dataParserExtendedInit;
exports.extendedKind = extendedKind;
