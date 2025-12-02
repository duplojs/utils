'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/object/index.cjs');
var pipe = require('../../common/pipe.cjs');
var fromEntries = require('../../object/fromEntries.cjs');
var filter = require('../../array/filter.cjs');
var isKeyof = require('../../string/isKeyof.cjs');
var entries = require('../../object/entries.cjs');
var override = require('../../common/override.cjs');

function object(shape, definition) {
    const self = baseExtended.dataParserExtendedInit(index.object(shape, definition), {
        omit: (self, omitObject, definition) => {
            const newShape = pipe.pipe(self.definition.shape, entries.entries, filter.filter(([key]) => !isKeyof.isKeyof(key, omitObject)), fromEntries.fromEntries);
            return object(newShape, definition);
        },
        pick: (self, omitObject, definition) => {
            const newShape = pipe.pipe(self.definition.shape, entries.entries, filter.filter(([key]) => isKeyof.isKeyof(key, omitObject)), fromEntries.fromEntries);
            return object(newShape, definition);
        },
    });
    return object.overrideHandler.apply(self);
}
object.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/object");

exports.object = object;
