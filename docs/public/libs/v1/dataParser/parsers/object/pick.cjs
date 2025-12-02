'use strict';

var index = require('./index.cjs');
var pipe = require('../../../common/pipe.cjs');
var filter = require('../../../array/filter.cjs');
var isKeyof = require('../../../string/isKeyof.cjs');
var entries = require('../../../object/entries.cjs');
var fromEntries = require('../../../object/fromEntries.cjs');

function pick(dataParser, omitObject, definition) {
    const newShape = pipe.pipe(dataParser.definition.shape, entries.entries, filter.filter(([key]) => isKeyof.isKeyof(key, omitObject)), fromEntries.fromEntries);
    return index.object(newShape, definition);
}

exports.pick = pick;
