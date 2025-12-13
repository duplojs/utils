'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/object/index.cjs');
var required = require('../parsers/object/required.cjs');
var partial = require('../parsers/object/partial.cjs');
var pick = require('../parsers/object/pick.cjs');
var omit = require('../parsers/object/omit.cjs');
var override = require('../../common/override.cjs');

function object(shape, definition) {
    const self = baseExtended.dataParserExtendedInit(index.object(shape, definition), {
        omit: (self, omitObject, definition) => omit.omit(self, omitObject, definition),
        pick: (self, pickObject, definition) => pick.pick(self, pickObject, definition),
        partial: (self, definition) => partial.partial(self, definition),
        required: (self, definition) => required.required(self, definition),
    });
    return object.overrideHandler.apply(self);
}
object.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/object");

exports.object = object;
