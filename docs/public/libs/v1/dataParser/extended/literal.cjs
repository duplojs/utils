'use strict';

var baseExtended = require('../baseExtended.cjs');
var literal$1 = require('../parsers/literal.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/literal/index.md}
 */
function literal(value, definition) {
    const self = baseExtended.dataParserExtendedInit(literal$1.literal(value, definition), {}, literal.overrideHandler);
    return self;
}
literal.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/literal");

exports.literal = literal;
