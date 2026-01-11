'use strict';

var baseExtended = require('../baseExtended.cjs');
var union$1 = require('../parsers/union.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/union/index.md}
 */
function union(options, definition) {
    const self = baseExtended.dataParserExtendedInit(union$1.union(options, definition), {});
    return union.overrideHandler.apply(self);
}
union.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/union");

exports.union = union;
