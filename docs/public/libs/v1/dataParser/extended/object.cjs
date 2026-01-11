'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/object/index.cjs');
var required = require('../parsers/object/required.cjs');
var partial = require('../parsers/object/partial.cjs');
var _extends = require('../parsers/object/extends.cjs');
var pick = require('../parsers/object/pick.cjs');
var omit = require('../parsers/object/omit.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/object/index.md}
 */
function object(shape, definition) {
    const self = baseExtended.dataParserExtendedInit(index.object(shape, definition), {
        omit: (self, omitObject, definition) => {
            const newShape = omit.omitShape(self.definition.shape, omitObject);
            return object(newShape, definition);
        },
        pick: (self, pickObject, definition) => {
            const newShape = pick.pickShape(self.definition.shape, pickObject);
            return object(newShape, definition);
        },
        extends: (self, extension, definition) => {
            const newShape = _extends.extendsShape(self.definition.shape, extension);
            return object(newShape, definition);
        },
        partial: (self, definition) => {
            const newShape = partial.partialShape(self.definition.shape);
            return object(newShape, definition);
        },
        required: (self, definition) => {
            const newShape = required.requiredShape(self.definition.shape);
            return object(newShape, definition);
        },
    });
    return object.overrideHandler.apply(self);
}
object.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/object");

exports.object = object;
