'use strict';

var index = require('./index.cjs');
var optional = require('../optional.cjs');
var identifier = require('../../identifier.cjs');
var forward = require('../../../common/forward.cjs');
var pipe = require('../../../common/pipe.cjs');
var map = require('../../../array/map.cjs');
var when = require('../../../either/right/when.cjs');
var when$1 = require('../../../either/left/when.cjs');
var entry = require('../../../object/entry.cjs');
var entries = require('../../../object/entries.cjs');
var fromEntries = require('../../../object/fromEntries.cjs');

function partialShape(shape) {
    return pipe.pipe(shape, entries.entries, map.map(([key, dataParser]) => pipe.pipe(identifier.identifier(dataParser, optional.optionalKind), when.whenIsRight(forward.forward), when$1.whenIsLeft(optional.optional), (dataParser) => entry.entry(key, dataParser))), fromEntries.fromEntries);
}
function partial(dataParser, definition) {
    const newShape = partialShape(dataParser.definition.shape);
    return index.object(newShape, definition);
}

exports.partial = partial;
exports.partialShape = partialShape;
