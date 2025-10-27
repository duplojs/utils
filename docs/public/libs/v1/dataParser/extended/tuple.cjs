'use strict';

var baseExtended = require('../baseExtended.cjs');
var tuple$1 = require('../parsers/tuple.cjs');
require('../../pattern/result.cjs');

function tuple(shape, definition) {
    return baseExtended.dataParserExtendedInit(tuple$1.tuple(shape, definition), {});
}

exports.tuple = tuple;
