'use strict';

var index = require('./index.cjs');
var optional = require('../optional.cjs');
var identifier = require('../../identifier.cjs');
var pipe = require('../../../common/pipe.cjs');
var map = require('../../../array/map.cjs');
var when = require('../../../either/right/when.cjs');
var when$1 = require('../../../either/left/when.cjs');
var forward = require('../../../common/forward.cjs');
var entry = require('../../../object/entry.cjs');
var entries = require('../../../object/entries.cjs');
var fromEntries = require('../../../object/fromEntries.cjs');

function required(dataParser, definition) {
    const newShape = pipe.pipe(dataParser.definition.shape, entries.entries, map.map(([key, dataParser]) => pipe.pipe(identifier.identifier(dataParser, optional.optionalKind), when.whenIsRight((dataParser) => dataParser.definition.inner), when$1.whenIsLeft(forward.forward), (dataParser) => entry.entry(key, dataParser))), fromEntries.fromEntries);
    return index.object(newShape, definition);
}

exports.required = required;
