'use strict';

var baseExtended = require('../baseExtended.cjs');
var unknown$1 = require('../parsers/unknown.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/unknown/index.md}
 */
function unknown(definition) {
    const self = baseExtended.dataParserExtendedInit(unknown$1.unknown(definition), {}, unknown.overrideHandler);
    return self;
}
unknown.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/unknown");

exports.unknown = unknown;
