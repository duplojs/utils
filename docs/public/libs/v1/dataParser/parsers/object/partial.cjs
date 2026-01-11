'use strict';

var index = require('./index.cjs');
var optional = require('../optional.cjs');
var identifier = require('../../identifier.cjs');
var pipe = require('../../../common/pipe.cjs');
var map = require('../../../array/map.cjs');
var whenNot = require('../../../common/whenNot.cjs');
var entry = require('../../../object/entry.cjs');
var entries = require('../../../object/entries.cjs');
var fromEntries = require('../../../object/fromEntries.cjs');

function partialShape(shape) {
    return pipe.pipe(shape, entries.entries, map.map(([key, dataParser]) => pipe.pipe(dataParser, whenNot.whenNot(identifier.identifier(optional.optionalKind), optional.optional), (dataParser) => entry.entry(key, dataParser))), fromEntries.fromEntries);
}
/**
 * {@include dataParser/classic/object/partial/index.md}
 */
function partial(dataParser, definition) {
    const newShape = partialShape(dataParser.definition.shape);
    return index.object(newShape, definition);
}

exports.partial = partial;
exports.partialShape = partialShape;
