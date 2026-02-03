'use strict';

var baseExtended = require('../baseExtended.cjs');
var empty$1 = require('../parsers/empty.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/empty/index.md}
 */
function empty(definition) {
    const self = baseExtended.dataParserExtendedInit(empty$1.empty(definition), {}, empty.overrideHandler);
    return self;
}
empty.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/empty");

exports.empty = empty;
