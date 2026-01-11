'use strict';

var index = require('./index.cjs');
var pipe = require('../../../common/pipe.cjs');
var filter = require('../../../array/filter.cjs');
var isKeyof = require('../../../string/isKeyof.cjs');
var entries = require('../../../object/entries.cjs');
var fromEntries = require('../../../object/fromEntries.cjs');

function pickShape(shape, pickObject) {
    return pipe.pipe(shape, entries.entries, filter.filter(([key]) => isKeyof.isKeyof(key, pickObject)), fromEntries.fromEntries);
}
/**
 * {@include dataParser/classic/object/pick/index.md}
 */
function pick(dataParser, pickObject, definition) {
    const newShape = pickShape(dataParser.definition.shape, pickObject);
    return index.object(newShape, definition);
}

exports.pick = pick;
exports.pickShape = pickShape;
