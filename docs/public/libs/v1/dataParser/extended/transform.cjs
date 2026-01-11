'use strict';

var baseExtended = require('../baseExtended.cjs');
var transform$1 = require('../parsers/transform.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/transform/index.md}
 */
function transform(inner, theFunction, definition) {
    const self = baseExtended.dataParserExtendedInit(transform$1.transform(inner, theFunction, definition), {});
    return transform.overrideHandler.apply(self);
}
transform.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/transform");

exports.transform = transform;
