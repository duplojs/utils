'use strict';

var baseExtended = require('../baseExtended.cjs');
var optional$1 = require('../parsers/optional.cjs');
var override = require('../../common/override.cjs');

function optional(inner, definition) {
    const self = baseExtended.dataParserExtendedInit(optional$1.optional(inner, definition), {});
    return optional.overrideHandler.apply(self);
}
optional.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/optional");

exports.optional = optional;
