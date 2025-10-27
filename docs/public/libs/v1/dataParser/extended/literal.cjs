'use strict';

var baseExtended = require('../baseExtended.cjs');
var literal$1 = require('../parsers/literal.cjs');
require('../../pattern/result.cjs');

function literal(value, definition) {
    return baseExtended.dataParserExtendedInit(literal$1.literal(value, definition), {});
}

exports.literal = literal;
