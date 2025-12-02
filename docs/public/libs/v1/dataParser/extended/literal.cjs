'use strict';

var baseExtended = require('../baseExtended.cjs');
var literal$1 = require('../parsers/literal.cjs');
var override = require('../../common/override.cjs');

function literal(value, definition) {
    const self = baseExtended.dataParserExtendedInit(literal$1.literal(value, definition), {});
    return literal.overrideHandler.apply(self);
}
literal.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/literal");

exports.literal = literal;
