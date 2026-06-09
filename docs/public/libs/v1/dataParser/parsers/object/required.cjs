'use strict';

var index = require('./index.cjs');
var optional = require('../optional.cjs');
var pipe = require('../../../common/pipe.cjs');
var fromEntries = require('../../../object/fromEntries.cjs');
var map = require('../../../array/map.cjs');
var entry = require('../../../object/entry.cjs');
var entries = require('../../../object/entries.cjs');

function requiredShape(shape) {
    return pipe.pipe(shape, entries.entries, map.map(([key, dataParser]) => entry.entry(key, optional.optionalKind.has(dataParser)
        ? dataParser.definition.inner
        : dataParser)), fromEntries.fromEntries);
}
/**
 * {@include dataParser/classic/object/required/index.md}
 */
function required(dataParser, definition) {
    const newShape = requiredShape(dataParser.definition.shape);
    return index.object(newShape, definition);
}

exports.required = required;
exports.requiredShape = requiredShape;
