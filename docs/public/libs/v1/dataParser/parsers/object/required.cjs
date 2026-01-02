'use strict';

var index = require('./index.cjs');
var optional = require('../optional.cjs');
var identifier = require('../../identifier.cjs');
var forward = require('../../../common/forward.cjs');
var pipe = require('../../../common/pipe.cjs');
var map = require('../../../array/map.cjs');
var when = require('../../../common/when.cjs');
var when$1 = require('../../../either/left/when.cjs');
var entry = require('../../../object/entry.cjs');
var entries = require('../../../object/entries.cjs');
var fromEntries = require('../../../object/fromEntries.cjs');

function requiredShape(shape) {
    return pipe.pipe(shape, entries.entries, map.map(([key, dataParser]) => pipe.pipe(dataParser, when.when(identifier.identifier(optional.optionalKind), (dataParser) => dataParser.definition.inner), when$1.whenIsLeft(forward.forward), (dataParser) => entry.entry(key, dataParser))), fromEntries.fromEntries);
}
function required(dataParser, definition) {
    const newShape = requiredShape(dataParser.definition.shape);
    return index.object(newShape, definition);
}

exports.required = required;
exports.requiredShape = requiredShape;
