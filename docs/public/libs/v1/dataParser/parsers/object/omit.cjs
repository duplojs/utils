'use strict';

var index = require('./index.cjs');
var pipe = require('../../../common/pipe.cjs');
var filter = require('../../../array/filter.cjs');
var isKeyof = require('../../../string/isKeyof.cjs');
var entries = require('../../../object/entries.cjs');
var fromEntries = require('../../../object/fromEntries.cjs');

function omitShape(shape, omitObject) {
    return pipe.pipe(shape, entries.entries, filter.filter(([key]) => !isKeyof.isKeyof(key, omitObject)), fromEntries.fromEntries);
}
/**
 * {@include dataParser/classic/object/omit/index.md}
 */
function omit(dataParser, omitObject, definition) {
    const newShape = omitShape(dataParser.definition.shape, omitObject);
    return index.object(newShape, definition);
}

exports.omit = omit;
exports.omitShape = omitShape;
